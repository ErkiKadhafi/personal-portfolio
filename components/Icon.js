import {
    FaCss3Alt,
    FaJira,
    FaLaravel,
    FaReact,
    FaSass,
    FaSourcetree,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import {
    SiAlpinedotjs,
    SiChakraui,
    SiJavascript,
    SiJquery,
    SiPusher,
    SiRedux,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

const TooltipContainer = ({ tooltip, darkTooltip, children }) => (
    <div className="group/tooltip relative">
        {/* prettier-ignore  */}
        <span
            className={`invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-hover/tooltip:z-50
                        absolute -top-10 left-1/2 
                        -translate-x-1/2 translate-y-1/2 group-hover/tooltip:translate-y-0
                        transition-all duration-300 ease-in-out
                        rounded py-1 px-4 
                        text-base font-semibold 
                        shadow-sm border border-gray-700 ${darkTooltip ? 'bg-black dark:bg-[#143044] text-white' : 'bg-white dark:bg-black-primary text-black dark:text-white'} `}
        >
            {tooltip}
        </span>
        {children}
    </div>
);

const IconSvg = ({ iconName, className }) => {
    if (iconName === "Laravel") return <FaLaravel className={className} />;
    else if (iconName === "ReactJs") return <FaReact className={className} />;
    else if (iconName === "Sourcetree")
        return <FaSourcetree className={className} />;
    else if (iconName === "Jira") return <FaJira className={className} />;
    else if (iconName === "HTML")
        return <AiOutlineHtml5 className={className} />;
    else if (iconName === "CSS") return <FaCss3Alt className={className} />;
    else if (iconName === "Sass") return <FaSass className={className} />;
    else if (iconName === "AlpineJs")
        return <SiAlpinedotjs className={className} />;
    else if (iconName === "Pusher") return <SiPusher className={className} />;
    else if (iconName === "Redux") return <SiRedux className={className} />;
    else if (iconName === "JQuery") return <SiJquery className={className} />;
    else if (iconName === "ChakraUI")
        return <SiChakraui className={className} />;
    else if (iconName === "Javascript")
        return <SiJavascript className={className} />;
    else if (iconName === "NextJs")
        return <TbBrandNextjs className={className} />;
    else if (iconName === "TailwindCSS")
        return <TbBrandTailwind className={className} />;
};
export const Icon = ({ iconName, className, tooltip, darkTooltip }) => {
    if (!tooltip) return <IconSvg iconName={iconName} className={className} />;

    return (
        <TooltipContainer tooltip={tooltip} darkTooltip={darkTooltip}>
            <IconSvg iconName={iconName} className={className} />
        </TooltipContainer>
    );
};

Icon.defaultProps = {
    tooltip: false,
    darkTooltip: false,
};
