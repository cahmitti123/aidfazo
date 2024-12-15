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
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative aspect-square bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer",
          sizes[size]
        )}
      >
        <div className="relative w-full h-full">
          <Image
            src="/af-logo.png"
            alt="AIDE-FAZO Logo"
            fill
            className="object-contain p-1"
            priority
          />
        </div>
      </div>
      {withText && (
        <span className="font-bold text-xl tracking-tight">
          AIDE-<span className="text-primary font-black">FAZO</span>
        </span>
      )}
    </div>
  );
};
