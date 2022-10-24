import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiLightbulbLine, RiLightbulbFlashFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import TypeAnimation from "react-type-animation";

const Navbar = () => {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
    ];
    const { route } = useRouter();
    const { theme, setTheme } = useTheme();

    /* ======== for mobile  ======== */
    const [isOpen, setIsOpen] = useState(false);

    /* ======== to avoid hydration missmatch theme ======== */
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            {/* ======== START ::: NAVBAR DESKTOP ======== */}
            <header
                className={`bg-white dark:bg-black-primary border-t-[5px] dark:border-gray-600 py-4`}
            >
                <div className="py-2">
                    <nav className="font-eina layout relative flex justify-between items-center">
                        <TypeAnimation
                            sequence={["Erki_KR", 5000, "Erki_KR"]}
                            wrapper="span"
                            className="type font-bold text-2xl tracking-widest text-black-primary dark:text-white "
                        />
                        <div className="flex items-center">
                            {/* ======== burger ======== */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="md:hidden space-y-1 p-2 rounded hover:bg-gray-primary dark:hover:bg-[#143044] transition focus:bg-gray-primary dark:focus:bg-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-primary"
                            >
                                <div className="bg-black-primary dark:bg-white h-1 w-6 rounded"></div>
                                <div className="bg-black-primary dark:bg-white h-1 w-6 rounded"></div>
                                <div className="bg-black-primary dark:bg-white h-1 w-6 rounded"></div>
                            </button>
                            {/* ======== nav list desktop ======== */}
                            <ul className="hidden md:flex items-center space-x-4 text-lg font-medium mr-4">
                                {navLinks.map((navLink, index) => (
                                    <li key={navLink.label}>
                                        <Link href={navLink.href}>
                                            <a
                                                className={`${
                                                    route === navLink.href
                                                        ? "text-purple-primary dark:banner-glow-green dark:text-white"
                                                        : "text-black dark:text-white hover:text-purple-primary dark:hover:text-purple-primary"
                                                } py-2 px-4 font-semibold transition duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-primary`}
                                            >
                                                <span>{navLink.label}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="https://drive.google.com/file/d/1uS7a1-mNi-OnI16-RQnKT0z0PV14cq4z/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="py-2 px-6 rounded-full font-semibold transition duration-200 bg-gray-primary hover:bg-black hover:text-white dark:bg-[#143044] dark:hover:bg-[#26ffae] dark:hover:text-black-primary dark:hover:shadow-banner-glow-green focus:outline-none focus-visible:ring focus-visible:ring-purple-primary focus:dark:bg-[#26ffae] "
                                    >
                                        <span>Resume</span>
                                    </a>
                                </li>
                            </ul>
                            {/* ======== dark mode switch desktop ======== */}
                            <button
                                className="hidden md:block text-2xl p-2 rounded-full hover:bg-gray-primary dark:hover:bg-[#143044] transition focus:bg-gray-primary dark:focus:bg-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-primary"
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                            >
                                {theme === "light" ? (
                                    <RiLightbulbLine />
                                ) : (
                                    <RiLightbulbFlashFill className="text-white" />
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            {/* ======== END ::: NAVBAR DESKTOP ======== */}

            {/* ======== START ::: POPUP NAVBAR MOBILE ======== */}
            <section
                className={`${
                    isOpen ? "visible opacity-1" : "invisible opacity-0"
                } md:hidden fixed inset-0 z-50 transition-all duration-300`}
            >
                {/* ======== overlay black modal ======== */}
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80 " />
                {/* ======== actual modal ======== */}
                <div className="fixed w-full max-w-[20rem] top-4 right-4 rounded-lg p-6 bg-white dark:bg-[#143044]">
                    <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                        <ul className="space-y-6">
                            {navLinks.map((navLink, index) => (
                                <li key={navLink.label}>
                                    <Link href={navLink.href}>
                                        <a
                                            className={`${
                                                route === navLink.href
                                                    ? "text-purple-primary dark:banner-glow-green "
                                                    : "text-black-primary hover:text-purple-primary dark:hover:text-purple-primary"
                                            }  dark:text-white font-semibold transition duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-primary`}
                                        >
                                            <span>{navLink.label}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="border p-1 rounded border-gray-700 hover:border-purple-primary transition group focus:outline-none focus-visible:ring focus-visible:ring-purple-primary"
                        >
                            <AiOutlineClose className="fill-black-primary dark:fill-white group-hover:fill-purple-primary text-xl " />
                        </button>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1uS7a1-mNi-OnI16-RQnKT0z0PV14cq4z/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 flex justify-center w-full py-3 px-6 rounded-full font-semibold transition duration-200 bg-gray-primary hover:bg-black hover:text-white dark:bg-[#001e2f] dark:hover:bg-[#26ffae] dark:hover:text-black-primary dark:hover:shadow-banner-glow-green focus:outline-none focus-visible:ring focus-visible:ring-purple-primary focus:dark:bg-[#26ffae] "
                    >
                        <span>My Resume</span>
                    </a>
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="mt-4 flex items-center space-x-5 w-full py-3 px-6 rounded-full font-semibold transition duration-200 bg-gray-primary hover:bg-black hover:text-white dark:bg-[#001e2f] dark:hover:bg-[#26ffae] dark:hover:text-black-primary dark:hover:shadow-banner-glow-green focus:outline-none focus-visible:ring focus-visible:ring-purple-primary focus:dark:bg-[#26ffae] "
                    >
                        {theme === "light" ? (
                            <>
                                <RiLightbulbLine />
                                <span>Change to dark theme</span>
                            </>
                        ) : (
                            <>
                                <RiLightbulbFlashFill />
                                <span>Change to light theme</span>
                            </>
                        )}
                    </button>
                </div>
            </section>
            {/* ======== END ::: POPUP NAVBAR MOBILE ======== */}
        </>
    );
};

export default Navbar;
