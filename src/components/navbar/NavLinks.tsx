"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-x-3 lg:gap-x-8">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={clsx(
              pathname === link.href &&
                "text-glow-black dark:text-glow-green font-semibold",
              cn(
                buttonVariants({ variant: "link" }),
                "text-xs sm:text-base",
                "px-0 sm:px-0"
              )
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
