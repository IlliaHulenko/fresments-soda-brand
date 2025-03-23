import clsx from "clsx";
import { ESLINT_DEFAULT_DIRS } from "next/dist/lib/constants";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export const Bounded: React.FC<BoundedProps> = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}) => {
  return (    
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className as string)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};