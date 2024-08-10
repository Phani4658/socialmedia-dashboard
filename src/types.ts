import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
  extras?: ReactNode;
}

export interface KPICardDetails {
  title: string;
  currentCount: number;
  percentage: number;
  icon: LucideIcon;
  trend?: "Up" | "Down" | "Same";
  duration?: "Yesterday" | "Past Week" | "Past Month";
}

export interface UsersType {
  id: number;
  username: string;
  email: string;
  name: string;
  status: "active" | "banned";
  lastActive?: string; // Date and time in ISO format
};
