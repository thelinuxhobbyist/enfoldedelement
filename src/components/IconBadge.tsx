import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md";
}

export function IconBadge({ icon: Icon, className, size = "md" }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-[#4A4FB5]/10 to-[#C12735]/10 ring-1 ring-[#4A4FB5]/15",
        size === "sm" ? "h-9 w-9" : "h-12 w-12",
        className
      )}
    >
      <Icon
        className={cn("text-[#C12735]", size === "sm" ? "h-4 w-4" : "h-5 w-5")}
        strokeWidth={2}
      />
    </div>
  );
}
