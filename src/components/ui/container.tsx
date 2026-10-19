import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-[104px] ${className}`}
      {...props}
    />
  );
}
