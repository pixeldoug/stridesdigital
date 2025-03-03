import * as React from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  customProp?: string;
}

export const Heading1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "text-5xl font-medium tracking-[-0.32px] sm:text-6xl",
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
