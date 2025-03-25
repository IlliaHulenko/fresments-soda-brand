/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export const Bounded: React.FC<BoundedProps> = ({  
  className,
  children,
  ...restProps
}) => {
  return (    
    <div
      className={clsx("px-4 first:pt-10 md:px-6", className as string)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </div>
  );
};