import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline";
};

const variants = {
  primary: "bg-ink text-paper",
  outline: "border-2 border-ink text-ink",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex h-12 items-center px-[22px] text-body font-bold leading-[1.5] ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
