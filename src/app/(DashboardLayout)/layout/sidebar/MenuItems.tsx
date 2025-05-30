import {
  IconAperture,
  IconCalendarWeek,
  IconCoin,
  IconFileText,
  IconFolders,
  IconLayoutDashboard,
  IconTypography,
  IconUsers,
  IconWritingSign,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Agenda",
    icon: IconCalendarWeek,
    href: "/agenda",
  },
  {
    id: uniqueId(),
    title: "Pessoas",
    icon: IconUsers,
    href: "/pessoas",
  },
  {
    id: uniqueId(),
    title: "Projetos",
    icon: IconFolders,
    href: "/projetos",
  },
  {
    id: uniqueId(),
    title: "Propostas",
    icon: IconFileText,
    href: "/propostas",
  },
  {
    id: uniqueId(),
    title: "Contratos",
    icon: IconWritingSign,
    href: "/contratos",
  },
  {
    id: uniqueId(),
    title: "Financeiro",
    icon: IconCoin,
    href: "/financeiro",
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCopy,
  //   href: "/utilities/shadow",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/sample-page",
  // },
];

export default Menuitems;
