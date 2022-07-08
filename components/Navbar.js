import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        // { href: "/about", label: "About" },
    ];
    const { route } = useRouter();
    const { theme, setTheme } = useTheme();

    /* ======== change background nav when user change page ======== */
    const [transparentBackground, setTransparentBackground] = useState(false);
    const handleScroll = () => {
        if (transparentBackground !== (window.pageYOffset === 0)) {
            setTransparentBackground(window.pageYOffset === 0);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    /* ======== to avoid hydration missmatch theme ======== */
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <header
            className={`${
                transparentBackground ? "" : "shadow-sm "
            } bg-white dark:bg-zinc-900 sticky top-0 z-20 transition-shadow transition-colors duration-300`}
        >
            <div className="from-violet-500 to-purple-500 via-fuchsia-500 h-2 bg-gradient-to-r"></div>
            <nav className="font-poppins layout flex justify-between items-center py-3">
                <ul className="flex items-center space-x-4 text-xs sm:text-base font-medium">
                    {navLinks.map((navLink, index) => (
                        <li key={navLink.label}>
                            <Link href={navLink.href}>
                                <a
                                    className={`${
                                        route === navLink.href
                                            ? "text-violet-500"
                                            : "text-black dark:text-white hover:text-violet-400 dark:hover:text-violet-400"
                                    }  transition duration-200 focus:outline-none focus-visible:ring focus-visible:ring-violet-400`}
                                >
                                    <span>{navLink.label}</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-violet-400 dark:hover:border-violet-400 hover:text-violet-400 dark:hover:text-violet-400 text-black dark:text-white p-2 rounded-md transition duration-200 focus:outline-none focus-visible:ring focus-visible:ring-violet-400"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    {theme === "light" ? (
                        <FiMoon size={20} />
                    ) : (
                        <FiSun size={20} />
                    )}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
