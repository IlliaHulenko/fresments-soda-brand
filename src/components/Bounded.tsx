import React, { ElementType } from "react";
import clsx from "clsx";

interface BoundedProps {
  as?: ElementType;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // For rest props
}

export const Bounded = ({
  as: Component = "section",
  className,
  children,
  ...restProps
}: BoundedProps) => {
  return (
    <Component
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Component>
  );
};
