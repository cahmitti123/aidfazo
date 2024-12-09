import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
}

export const Logo = ({
  className,
  size = "md",
  withText = true,
}: LogoProps) => {
  const sizes = {
    sm: "h-10",
    md: "h-12",
    lg: "h-16",
    xl: "h-24",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "relative aspect-square rounded-full bg-primary p-0.2 border border-primary/90 hover:bg-primary/90 transition-all duration-300 cursor-pointer",
          sizes[size]
        )}
      >
        <div className="relative w-full h-full">
          <Image
            src="/nh-logo.png"
            alt="NH MAROC Logo"
            fill
            className="object-contain p-0.5"
            priority
          />
        </div>
      </div>
      {withText && (
        <span className="font-bold text-xl">
          NH <span className="text-primary">MAROC</span>
        </span>
      )}
    </div>
  );
};
