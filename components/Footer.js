import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="layout py-6 border-t border-gray-300 dark:border-gray-600 ">
                <p className="text-xl text-center font-bold text-gray-500 dark:text-gray-600 mb-3">Lets Connect!</p>
                <div className="flex justify-center items-center space-x-4">
                    <a
                        href="mailto: erki.qaedhafi@gmail.com"
                        className="text-3xl focus:outline-none focus-visible:ring focus-visible:ring-violet-400  "
                    >
                        <AiOutlineMail className="fill-gray-500 dark:fill-gray-600 hover:fill-violet-500 dark:hover:fill-violet-500 transition " />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/erkikadhafi/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl focus:outline-none focus-visible:ring focus-visible:ring-violet-400 "
                    >
                        <AiFillLinkedin className="fill-gray-500 dark:fill-gray-600 hover:fill-violet-500 dark:hover:fill-violet-500 transition " />
                    </a>
                    <a
                        href="https://github.com/ErkiKadhafi"
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl focus:outline-none focus-visible:ring focus-visible:ring-violet-400 "
                    >
                        <AiFillGithub className="fill-gray-500 dark:fill-gray-600 hover:fill-violet-500 dark:hover:fill-violet-500 transition " />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
