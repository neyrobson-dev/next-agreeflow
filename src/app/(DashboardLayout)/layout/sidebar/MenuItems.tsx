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
    href: "/pages/schedule",
  },
  {
    id: uniqueId(),
    title: "Pessoas",
    icon: IconUsers,
    href: "/pages/people",
  },
  {
    id: uniqueId(),
    title: "Projetos",
    icon: IconFolders,
    href: "/pages/projects",
  },
  {
    id: uniqueId(),
    title: "Propostas",
    icon: IconFileText,
    href: "/pages/proposals",
  },
  {
    id: uniqueId(),
    title: "Contratos",
    icon: IconWritingSign,
    href: "/pages/contracts",
  },
  {
    id: uniqueId(),
    title: "Financeiro",
    icon: IconCoin,
    href: "/pages/finance",
  },
  // {
  //   id: uniqueId(),
  //   title: "Typography",
  //   icon: IconTypography,
  //   href: "/utilities/typography",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCoin,
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
