import * as React from "react";

import { cn } from "@/lib/utils";

export interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
  customProp?: string;
}

export const Main = React.forwardRef<HTMLDivElement, MainProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center self-stretch", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Main.displayName = "Main";
