import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="transition-colors duration-300 bg-[#001e2f] dark:bg-[#143044]">
            <div className="layout flex flex-col-reverse md:flex-row justify-between items-center py-12 ">
                <Link href="/">
                    <a className="hidden md:inline font-bold text-3xl text-gray-500">
                        Erki_KR
                    </a>
                </Link>
                <p className="font-semibold text-gray-500">
                    &copy; 2022 Erki Kadhafi. All rights deserved.
                </p>
                <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
                    <a
                        href="mailto: erki.qaedhafi@gmail.com"
                        className="text-3xl p-2 rounded-full hover:bg-gray-primary dark:hover:bg-[#143044] dark:focus:bg-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-primary "
                    >
                        <AiOutlineMail className="fill-white transition " />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/erkikadhafi/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl p-2 rounded-full hover:bg-gray-primary dark:hover:bg-[#143044] dark:focus:bg-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-primary"
                    >
                        <AiFillLinkedin className="fill-white transition " />
                    </a>
                    <a
                        href="https://github.com/ErkiKadhafi"
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl p-2 rounded-full hover:bg-gray-primary dark:hover:bg-[#143044] dark:focus:bg-transparent focus:outline-none focus-visible:ring focus-visible:ring-purple-primary"
                    >
                        <AiFillGithub className="fill-white transition " />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
