import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <section className="h-screen layout flex flex-col justify-center items-center">
      <div
        className={clsx(
          "flex flex-col justify-center items-center text-center"
        )}
      >
        <div className={clsx("space-y-4 sm:space-y-6", "order-last")}>
          <h1
            className={clsx(
              "text-glow-black dark:text-glow-purple",
              "text-2xl sm:text-3xl lg:text-4xl font-semibold"
            )}
          >
            Sorry, The page is not found
          </h1>
          <p className="text-base sm:text-lg lg:text-xl">
            The page you're looking for seem to be moved, deleted, or doesn't
            exist.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "text-sm sm:text-base lg:text-lg"
            )}
          >
            Return Home
          </Link>
        </div>
        <div>
          <figure
            className={clsx(
              "hidden dark:block relative",
              "h-[200px] w-[191px] lg:h-[300px] lg:w-[291px]"
            )}
          >
            <Image
              src="/images/lamp-neon-color.png"
              fill={true}
              alt=""
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
            />
          </figure>
          <figure
            className={clsx(
              "block dark:hidden relative",
              "h-[200px] w-[191px] lg:h-[300px] lg:w-[291px]"
            )}
          >
            <Image
              src="/images/lamp-neon-black.png"
              fill={true}
              alt=""
              sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
