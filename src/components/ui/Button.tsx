import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-light/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-light hover:shadow-lg hover:shadow-brand-primary/20",
    secondary: "bg-brand-dark text-white border border-brand-primary/20 hover:border-brand-primary hover:bg-brand-primary/10",
    accent: "bg-brand-accent text-brand-dark hover:bg-yellow-500 hover:shadow-lg hover:shadow-brand-accent/30",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark",
    ghost: "text-brand-primary hover:bg-brand-primary/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm md:text-base",
    lg: "px-8 py-3.5 text-base md:text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props as any}
    >
      {children}
    </motion.button>
  );
}
