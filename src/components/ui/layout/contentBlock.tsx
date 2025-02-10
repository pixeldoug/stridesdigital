import * as React from "react";

import { cn } from "@/lib/utils";

export interface ContentBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  customProp?: string;
}

export const ContentBlock = React.forwardRef<HTMLDivElement, ContentBlockProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-start gap-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ContentBlock.displayName = "ContentBlock";
