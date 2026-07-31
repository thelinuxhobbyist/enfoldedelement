import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "brand" | "soft";
}

export function IconBadge({
  icon: Icon,
  className,
  size = "md",
  tone = "brand",
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-2xl",
        tone === "brand" &&
          "bg-[#4A4FB5]/[0.09] text-[#C12735] ring-1 ring-inset ring-[#4A4FB5]/12",
        tone === "soft" &&
          "bg-white/15 text-white ring-1 ring-white/25",
        size === "sm" && "h-9 w-9",
        size === "md" && "h-12 w-12",
        size === "lg" && "h-14 w-14",
        className
      )}
      aria-hidden="true"
    >
      <Icon
        className={cn(
          size === "sm" && "h-4 w-4",
          size === "md" && "h-5 w-5",
          size === "lg" && "h-6 w-6"
        )}
        strokeWidth={1.8}
      />
    </div>
  );
}
