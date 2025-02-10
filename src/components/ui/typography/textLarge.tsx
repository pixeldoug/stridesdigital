// components/ui/typography.tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  customProp?: string;
}
export const TextLarge = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-xl font-normal", className)} {...props}>
        {children}
      </p>
    );
  }
);

TextLarge.displayName = "TextLarge";
