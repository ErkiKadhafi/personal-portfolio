"use client";

import Link from "next/link";
import ButtonThemeSwitcher from "./navbar/ButtonThemeSwitcher";
import NavLinks from "./navbar/NavLinks";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 bg-background",
        "transition-background duration-300",
        !onTop && "transition-shadow shadow-sm shadow-black dark:shadow-ring"
      )}
    >
      {/* ======== for nProgress ======== */}
      <div className="h-1 sm:h-1.5 w-full bg-primary dark:bg-background-secondary" />
      <div className="py-3 sm:py-4 layout flex justify-between items-center">
        <nav>
          <NavLinks />
        </nav>
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <Link
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants(), "text-xs sm:text-sm")}
            href="https://drive.google.com/file/d/1ybJqoKnxJ0CjzpAsRveEs6IsPui2izxp/view?usp=sharing"
            aria-label="See my resume."
          >
            Resume
          </Link>
          <ButtonThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
