import { useEffect, useRef } from "react";

const SCRIPTS = ["A", "文", "ع", "ह", "É", "Я", "Ω", "あ", "한"];

/** Marker locations on the globe (lat/lon in radians) */
const MARKERS = SCRIPTS.map((script, i) => ({
  script,
  lat: ((i / SCRIPTS.length) * 140 - 70) * (Math.PI / 180),
  lon: (i * 47 + 12) * (Math.PI / 180),
}));

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface Projected {
  x: number;
  y: number;
  alpha: number;
  depth: number;
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return program;
}

const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute float a_alpha;
  uniform vec2 u_resolution;
  varying float v_alpha;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    clip.y *= -1.0;
    gl_Position = vec4(clip, 0.0, 1.0);
    v_alpha = a_alpha;
  }
`;

const LINE_FRAGMENT = `
  precision mediump float;
  varying float v_alpha;
  void main() {
    gl_FragColor = vec4(0.9, 0.93, 1.0, v_alpha);
  }
`;

const POINT_VERTEX = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_alpha;
  uniform vec2 u_resolution;
  varying float v_alpha;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    clip.y *= -1.0;
    gl_Position = vec4(clip, 0.0, 1.0);
    gl_PointSize = a_size;
    v_alpha = a_alpha;
  }
`;

const POINT_FRAGMENT = `
  precision mediump float;
  varying float v_alpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float glow = 1.0 - smoothstep(0.12, 0.5, d);
    gl_FragColor = vec4(1.0, 0.97, 0.98, v_alpha * glow);
  }
`;

function latLonToSphere(lat: number, lon: number): Vec3 {
  return {
    x: Math.cos(lat) * Math.cos(lon),
    y: Math.sin(lat),
    z: Math.cos(lat) * Math.sin(lon),
  };
}

function rotateY(v: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: v.x * c - v.z * s, y: v.y, z: v.x * s + v.z * c };
}

function rotateX(v: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: v.x, y: v.y * c - v.z * s, z: v.y * s + v.z * c };
}

function project(
  v: Vec3,
  cx: number,
  cy: number,
  radius: number
): Projected {
  const depth = 2.8 + v.z;
  const scale = 2.2 / depth;
  return {
    x: cx + v.x * radius * scale,
    y: cy - v.y * radius * scale,
    alpha: Math.max(0.04, Math.min(1, (v.z + 1.1) / 2.2)),
    depth: v.z,
  };
}

function buildGlobeLines(segments: number): Vec3[][] {
  const lines: Vec3[][] = [];
  const meridians = 14;
  const parallels = 9;

  for (let m = 0; m < meridians; m++) {
    const lon = (m / meridians) * Math.PI * 2;
    const arc: Vec3[] = [];
    for (let s = 0; s <= segments; s++) {
      const lat = (s / segments) * Math.PI - Math.PI / 2;
      arc.push(latLonToSphere(lat, lon));
    }
    lines.push(arc);
  }

  for (let p = 1; p < parallels; p++) {
    const lat = (p / parallels) * Math.PI - Math.PI / 2;
    const ring: Vec3[] = [];
    for (let s = 0; s <= segments; s++) {
      const lon = (s / segments) * Math.PI * 2;
      ring.push(latLonToSphere(lat, lon));
    }
    lines.push(ring);
  }

  return lines;
}

/** Cross-globe connection arcs between marker cities */
function buildConnectionArcs(): Vec3[][] {
  const arcs: Vec3[][] = [];
  const pairs = [
    [0, 3], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8], [0, 6], [1, 7], [2, 8],
  ];

  pairs.forEach(([a, b]) => {
    const start = latLonToSphere(MARKERS[a].lat, MARKERS[a].lon);
    const end = latLonToSphere(MARKERS[b].lat, MARKERS[b].lon);
    const mid = normalize({
      x: (start.x + end.x) * 0.5,
      y: (start.y + end.y) * 0.5 + 0.35,
      z: (start.z + end.z) * 0.5,
    });
    const steps = 24;
    const arc: Vec3[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const u = 1 - t;
      arc.push(
        normalize({
          x: u * u * start.x + 2 * u * t * mid.x + t * t * end.x,
          y: u * u * start.y + 2 * u * t * mid.y + t * t * end.y,
          z: u * u * start.z + 2 * u * t * mid.z + t * t * end.z,
        })
      );
    }
    arcs.push(arc);
  });

  return arcs;
}

function normalize(v: Vec3): Vec3 {
  const len = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / len, y: v.y / len, z: v.z / len };
}

export default function HeroWebGLBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glCanvasRef = useRef<HTMLCanvasElement>(null);
  const labelCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const glCanvas = glCanvasRef.current;
    const labelCanvas = labelCanvasRef.current;
    if (!wrap || !glCanvas || !labelCanvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gl = glCanvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    const lineProgram = createProgram(gl, VERTEX_SHADER, LINE_FRAGMENT);
    const pointProgram = createProgram(gl, POINT_VERTEX, POINT_FRAGMENT);
    if (!lineProgram || !pointProgram) return;

    const linePosLoc = gl.getAttribLocation(lineProgram, "a_position");
    const lineAlphaLoc = gl.getAttribLocation(lineProgram, "a_alpha");
    const lineResLoc = gl.getUniformLocation(lineProgram, "u_resolution");

    const pointPosLoc = gl.getAttribLocation(pointProgram, "a_position");
    const pointSizeLoc = gl.getAttribLocation(pointProgram, "a_size");
    const pointAlphaLoc = gl.getAttribLocation(pointProgram, "a_alpha");
    const pointResLoc = gl.getUniformLocation(pointProgram, "u_resolution");

    const lineBuffer = gl.createBuffer();
    const lineAlphaBuffer = gl.createBuffer();
    const pointBuffer = gl.createBuffer();
    const pointSizeBuffer = gl.createBuffer();
    const pointAlphaBuffer = gl.createBuffer();

    const gridLines = buildGlobeLines(32);
    const connectionArcs = buildConnectionArcs();
    const tilt = 0.38;

    let width = 0;
    let height = 0;
    let rotation = 0;
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = wrap.clientWidth;
      height = wrap.clientHeight;

      glCanvas.width = Math.floor(width * dpr);
      glCanvas.height = Math.floor(height * dpr);
      glCanvas.style.width = `${width}px`;
      glCanvas.style.height = `${height}px`;

      labelCanvas.width = glCanvas.width;
      labelCanvas.height = glCanvas.height;
      labelCanvas.style.width = `${width}px`;
      labelCanvas.style.height = `${height}px`;

      gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    };

    const transformPoint = (v: Vec3): Vec3 => {
      let p = rotateY(v, rotation);
      p = rotateX(p, tilt);
      return p;
    };

    const globeCenter = () => {
      const isMobile = width < 768;
      return {
        cx: isMobile ? width * 0.82 : width * 0.72,
        cy: isMobile ? height * 0.62 : height * 0.52,
        radius: Math.min(width, height) * (isMobile ? 0.3 : 0.34),
      };
    };

    const drawLineSegments = (
      arcs: Vec3[][],
      baseAlpha: number,
      skipBack: boolean
    ) => {
      const { cx, cy, radius } = globeCenter();
      const positions: number[] = [];
      const alphas: number[] = [];

      arcs.forEach((arc) => {
        for (let i = 0; i < arc.length - 1; i++) {
          const a3 = transformPoint(arc[i]);
          const b3 = transformPoint(arc[i + 1]);

          if (skipBack && a3.z < -0.05 && b3.z < -0.05) continue;

          const a = project(a3, cx, cy, radius);
          const b = project(b3, cx, cy, radius);
          const alpha = baseAlpha * Math.min(a.alpha, b.alpha);

          positions.push(a.x, a.y, b.x, b.y);
          alphas.push(alpha, alpha);
        }
      });

      return { positions, alphas };
    };

    const tick = () => {
      if (!running) return;

      const dpr = glCanvas.width / width;
      if (!prefersReducedMotion) rotation += 0.004;

      const grid = drawLineSegments(gridLines, 0.14, true);
      const connections = drawLineSegments(connectionArcs, 0.28, false);

      const linePositions = [...grid.positions, ...connections.positions];
      const lineAlphas = [...grid.alphas, ...connections.alphas];

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      if (linePositions.length > 0) {
        gl.useProgram(lineProgram);
        gl.uniform2f(lineResLoc, width, height);

        gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(linePositions), gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(linePosLoc);
        gl.vertexAttribPointer(linePosLoc, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, lineAlphaBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineAlphas), gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(lineAlphaLoc);
        gl.vertexAttribPointer(lineAlphaLoc, 1, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.LINES, 0, linePositions.length / 2);
      }

      const { cx, cy, radius } = globeCenter();
      const pointPositions: number[] = [];
      const pointSizes: number[] = [];
      const pointAlphas: number[] = [];
      const labels: { x: number; y: number; script: string; alpha: number }[] = [];

      MARKERS.forEach((marker) => {
        const p3 = transformPoint(latLonToSphere(marker.lat, marker.lon));
        const p = project(p3, cx, cy, radius);
        if (p3.z < -0.1) return;

        pointPositions.push(p.x, p.y);
        pointSizes.push(5 * dpr);
        pointAlphas.push(0.45 * p.alpha);
        labels.push({ x: p.x, y: p.y, script: marker.script, alpha: p.alpha });
      });

      if (pointPositions.length > 0) {
        gl.useProgram(pointProgram);
        gl.uniform2f(pointResLoc, width, height);

        gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointPositions), gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(pointPosLoc);
        gl.vertexAttribPointer(pointPosLoc, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, pointSizeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointSizes), gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(pointSizeLoc);
        gl.vertexAttribPointer(pointSizeLoc, 1, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, pointAlphaBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointAlphas), gl.DYNAMIC_DRAW);
        gl.enableVertexAttribArray(pointAlphaLoc);
        gl.vertexAttribPointer(pointAlphaLoc, 1, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.POINTS, 0, pointPositions.length / 2);
      }

      const labelCtx = labelCanvas.getContext("2d");
      if (labelCtx) {
        labelCtx.clearRect(0, 0, labelCanvas.width, labelCanvas.height);
        labelCtx.textAlign = "center";
        labelCtx.textBaseline = "middle";
        labelCtx.font = `${12 * dpr}px system-ui, sans-serif`;
        labels.forEach(({ x, y, script, alpha }) => {
          labelCtx.fillStyle = `rgba(255,255,255,${0.18 * alpha})`;
          labelCtx.fillText(script, x * dpr, (y - 14) * dpr);
        });
      }

      if (!prefersReducedMotion) raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        if (!prefersReducedMotion) raf = requestAnimationFrame(tick);
      }
    };

    resize();
    tick();

    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteProgram(lineProgram);
      gl.deleteProgram(pointProgram);
      gl.deleteBuffer(lineBuffer);
      gl.deleteBuffer(lineAlphaBuffer);
      gl.deleteBuffer(pointBuffer);
      gl.deleteBuffer(pointSizeBuffer);
      gl.deleteBuffer(pointAlphaBuffer);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={glCanvasRef} className="absolute inset-0 h-full w-full" />
      <canvas ref={labelCanvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A4FB5]/60 via-[#4A4FB5]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A4FB5]/25 via-transparent to-[#4A4FB5]/45" />
    </div>
  );
}
