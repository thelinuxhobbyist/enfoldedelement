import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
  <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" style={{ position: 'relative' }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative' }}>
  <div className="flex items-center justify-between h-16" style={{ position: 'relative' }}>
          <Link to="/" className="flex items-center">
            <img src="https://cdn.enfoldedmedia.com/enfolded-images/logo.png" alt="Enfolded Media" className="h-10 w-auto" />
          </Link>
          {/* Animated border under navbar */}
          <style>{`
            @keyframes borderMove {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
          `}</style>
          <div style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, #e3342f, #4A4FB5, #e3342f)',
            backgroundSize: '200% 100%',
            animation: 'borderMove 2s linear infinite',
            zIndex: 51
          }} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${isActive(item.path) ? "text-primary" : "text-muted-foreground"} hover:text-[#e3342f]`}
              >
                {item.name}
              </Link>
            ))}
            {!isActive("/packages") && (
              <Button variant="hero" size="sm" asChild>
                <a
                  href="/#contact"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (location.pathname === "/") {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/', { replace: false });
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 120);
                    }
                  }}
                >
                  Get Started
                </a>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {!isActive("/packages") && (
              <div className="pt-2">
                <Button variant="hero" className="w-full" asChild>
                  <a
                    href="/#contact"
                    onClick={(e: any) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (location.pathname === "/") {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        navigate('/', { replace: false });
                        setTimeout(() => {
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 120);
                      }
                    }}
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
