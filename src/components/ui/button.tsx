import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5",
        secondary: "bg-subtle text-text-primary hover:bg-muted border border-border hover:border-border-hover hover:-translate-y-0.5",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-subtle",
        default: "bg-accent text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "bg-transparent text-text-primary border border-border hover:bg-subtle",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
