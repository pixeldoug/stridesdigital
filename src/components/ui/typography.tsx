// components/ui/typography.tsx
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Define our own prop type by extending
 * React's default heading element props
 */
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  customProp?: string;
}

/**
 * H1 - a custom heading component
 */
export const Heading1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          // These are our default Tailwind styles for H1.
          // Modify them to suit your own design system.
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

Heading1.displayName = "Heading1";
