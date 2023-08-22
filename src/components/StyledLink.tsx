import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { buttonVariants } from "./ui/button";

type StyledLinkProps = {
  href: string;
  openNewTab?: boolean;
  showUnderline?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"a"> &
  LinkProps;

export default function StyledLink({
  href,
  openNewTab = false,
  children,
  showUnderline = true,
  className,
  ...rest
}: StyledLinkProps) {
  const classNameCustom = cn(
    buttonVariants({ variant: "link" }),
    showUnderline && "link-underline",
    "text-sm sm:text-base lg:text-lg",
    "link-underline-animation",
    "h-0 sm:h-0 px-0 sm:px-0 ",
    className
  );
  if (!openNewTab)
    return (
      <Link
        target="_blank"
        rel="noreferrer"
        href={href}
        className={classNameCustom}
        {...rest}
      >
        {children}
      </Link>
    );
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={href}
      className={classNameCustom}
      {...rest}
    >
      {children}
    </Link>
  );
}
