import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-panel rounded-[28px] border border-white/10 text-card-foreground shadow-premium",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 sm:p-7", className)} {...props} />
));

CardContent.displayName = "CardContent";

export { Card, CardContent };
