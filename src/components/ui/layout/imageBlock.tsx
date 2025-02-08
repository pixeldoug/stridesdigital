import * as React from "react";

import { cn } from "@/lib/utils";

export interface ImageBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  customProp?: string;
}

export const ImageBlock = React.forwardRef<HTMLDivElement, ImageBlockProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    );
  }
);

ImageBlock.displayName = "ImageBlock";
