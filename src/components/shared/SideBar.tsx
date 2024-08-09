"use client";

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  StickyNote,
  User,
  Users,
  Users2,
} from "lucide-react";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarItems } from "@/types";
import { SidebarButton } from "./SidebarButton";
import { useMediaQuery } from "usehooks-ts";
import { SidebarMobile } from "./SidebarMobile";

const sidebarItems: SidebarItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    { label: "Users", href: "/users", icon: Users2 },
    { label: "Posts", href: "posts", icon: StickyNote },
  ],
  extras: (
    <div className="flex flex-col gap-2">
      <SidebarButton icon={MoreHorizontal} className="w-full">
        More
      </SidebarButton>
      
    </div>
  ),
};

export default function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
