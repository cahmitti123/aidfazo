import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export const Logo = ({ className, size = "md", withText = true }: LogoProps) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-lg bg-gradient-to-tr from-primary via-primary/70 to-primary border border-secondary",
          sizes[size]
        )}
      >
        <span className="text-primary-foreground font-bold">
          {size === "sm" ? "N" : "NH"}
        </span>
      </div>
      {withText && (
        <span className="font-bold text-xl">
          NH <span className="text-primary">MAROC</span>
        </span>
      )}
    </div>
  );
}; 