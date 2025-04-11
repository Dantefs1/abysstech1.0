import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-lg font-medium transition-all",
          variant === "default" && "bg-white text-black hover:bg-gray-200",
          variant === "outline" && "border border-white text-white hover:bg-white/10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
