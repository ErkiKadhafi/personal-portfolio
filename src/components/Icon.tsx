import {
  FaArrowLeft,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaReact,
  FaSass,
  FaWordpressSimple,
} from "react-icons/fa";
import CustomTooltip from "./Tooltip";
import {
  TbBrandHeadlessui,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";
import {
  SiApollographql,
  SiChakraui,
  SiJavascript,
  SiJquery,
  SiPusher,
  SiTypescript,
} from "react-icons/si";

export type IconListType = keyof typeof iconList;

type IconProps = {
  iconName: IconListType;
};

export function CustomIcon({ iconName }: IconProps) {
  const Selected = iconList[iconName];
  return (
    <CustomTooltip content={Selected.name}>
      <span>
        <Selected.icon className="cursor-pointer" />
      </span>
    </CustomTooltip>
  );
}

const iconList = {
  arrowLeft: {
    name: "ChakraUI",
    icon: FaArrowLeft,
  },
  chakraui: {
    name: "ChakraUI",
    icon: SiChakraui,
  },
  css: {
    name: "CSS",
    icon: FaCss3Alt,
  },
  headlessui: {
    name: "HeadlessUI",
    icon: TbBrandHeadlessui,
  },
  graphql: {
    name: "GraphQL",
    icon: SiApollographql,
  },
  html: {
    name: "HTML",
    icon: FaHtml5,
  },
  javascript: {
    name: "Javascript",
    icon: SiJavascript,
  },
  jquery: {
    name: "JQuery",
    icon: SiJquery,
  },
  laravel: {
    name: "Laravel",
    icon: FaLaravel,
  },
  next: {
    name: "NextJs",
    icon: TbBrandNextjs,
  },
  pusher: {
    name: "Pusher",
    icon: SiPusher,
  },
  react: {
    name: "ReactJs",
    icon: FaReact,
  },
  sass: {
    name: "SaSS",
    icon: FaSass,
  },
  shadcn: {
    name: "Shadcn",
    icon: FaSass,
  },
  tailwind: {
    name: "TailwindCSS",
    icon: TbBrandTailwind,
  },
  typescript: {
    name: "Typescript",
    icon: SiTypescript,
  },
  wordpress: {
    name: "Wordpress",
    icon: FaWordpressSimple,
  },
};
