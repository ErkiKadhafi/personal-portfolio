import { FaLaravel, FaReact, FaSass } from "react-icons/fa";
import CustomTooltip from "./Tooltip";
import {
  TbBrandHeadlessui,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";
import {
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

export const CustomIcon = ({ iconName }: IconProps) => {
  const Selected = iconList[iconName];
  return (
    <CustomTooltip content={Selected.name}>
      <Selected.icon className="cursor-pointer" />
    </CustomTooltip>
  );
};

const iconList = {
  chakraui: {
    name: "ChakraUI",
    icon: SiChakraui,
  },
  headlessui: {
    name: "HeadlessUI",
    icon: TbBrandHeadlessui,
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
};
