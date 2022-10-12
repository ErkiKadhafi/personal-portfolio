import { FaCss3Alt, FaHtml5, FaJira, FaLaravel, FaReact, FaSass, FaSourcetree } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiAlpinedotjs, SiChakraui, SiJavascript, SiJquery, SiPusher, SiRedux } from "react-icons/si";

export const getIcon = (iconName, key, className) => {
    const icons = [
        /* ======== FA ICONS ======== */
        {
            name: "Laravel",
            icon: <FaLaravel key={key} className={className} />,
        },
        {
            name: "ReactJs",
            icon: <FaReact key={key} className={className} />,
        },
        {
            name: "Sourcetree",
            icon: <FaSourcetree key={key} className={className} />,
        },
        {
            name: "Jira",
            icon: <FaJira key={key} className={className} />,
        },
        {
            name: "HTML",
            icon: <FaHtml5 key={key} className={className} />,
        },
        {
            name: "CSS",
            icon: <FaCss3Alt key={key} className={className} />,
        },
        {
            name: "Sass",
            icon: <FaSass key={key} className={className} />,
        },
        /* ======== SI ICONS ======== */
        {
            name: "AlpineJs",
            icon: <SiAlpinedotjs key={key} className={className} />,
        },
        {
            name: "Pusher",
            icon: <SiPusher key={key} className={className} />,
        },
        {
            name: "Redux",
            icon: <SiRedux key={key} className={className} />,
        },
        {
            name: "JQuery",
            icon: <SiJquery key={key} className={className} />,
        },
        {
            name: "ChakraUI",
            icon: <SiChakraui key={key} className={className} />,
        },
        {
            name: "Javascript",
            icon: <SiJavascript key={key} className={className} />,
        },
        /* ======== TB ICONS ======== */
        {
            name: "NextJs",
            icon: <TbBrandNextjs key={key} className={className} />,
        },
        {
            name: "TailwindCSS",
            icon: <TbBrandTailwind key={key} className={className} />,
        },
    ];
    return icons.find((icon) => icon.name === iconName)?.icon;
};
