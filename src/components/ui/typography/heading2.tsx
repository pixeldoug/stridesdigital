import * as React from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  customProp?: string;
}

export const Heading2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn("text-4xl font-medium tracking-[-1px]", className)}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

Heading2.displayName = "Heading2";
