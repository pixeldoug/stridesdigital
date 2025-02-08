import * as React from "react";

import { cn } from "@/lib/utils";

export interface ContentGridProps extends React.HTMLAttributes<HTMLDivElement> {
  customProp?: string;
}

export const ContentGrid = React.forwardRef<HTMLDivElement, ContentGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-start", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ContentGrid.displayName = "ContentGrid";
