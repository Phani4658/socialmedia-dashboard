import { stat } from "fs";
import {
  Briefcase,
  LogOut,
  MoreHorizontal,
  Settings,
  Users,
} from "lucide-react";
import {  UsersType } from "./types";

enum Trend {
  Up = "Up",
  Down = "Down",
  Same = "Same",
}

enum Duration {
  Yesterday = "Yesterday",
  PastWeek = "Past Week",
  PastMonth = "Past Month",
}

export const kpiCardDetails = [
  {
    title: "Total Users",
    currentCount: 4000,
    percentage: 5,
    icon: Users,
    trend: Trend.Up,
    duration: Duration.Yesterday,
  },
  {
    title: "Total Posts",
    currentCount: 1000,
    percentage: -2,
    icon: Briefcase,
    trend: Trend.Down,
    duration: Duration.PastWeek,
  },
  {
    title: "Posts Published in Last 24 Hours",
    currentCount: 300,
    percentage: -5,
    icon: Briefcase,
    trend: Trend.Down,
    duration: Duration.Yesterday,
  },
  {
    title: "Users Active in Last 24 Hours",
    currentCount: 500,
    percentage: 10,
    icon: Users,
    trend: Trend.Up,
    duration: Duration.Yesterday,
  },
];

export const userKPICards = [
  {
    title: "Total Users",
    currentCount: 4000,
    percentage: 5,
    icon: Users,
    trend: Trend.Up,
    duration: Duration.Yesterday,
  },
  {
    title: "Users Active in Last 24 Hours",
    currentCount: 500,
    percentage: 10,
    icon: Users,
    trend: Trend.Up,
    duration: Duration.Yesterday,
  },
];

export const recentlyActiveUsers = [
  {
    userId: 1,
    username: "john_doe",
    name: "John Doe",
    email: "john.doe@example.com",
    lastActive: "2024-08-09T14:30:00", // Date and time in ISO format
  },
  {
    userId: 2,
    username: "jane_smith",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    lastActive: "2024-08-09T13:45:00",
  },
  {
    userId: 3,
    username: "alice_jones",
    name: "Alice Jones",
    email: "alice.jones@example.com",
    lastActive: "2024-08-09T12:20:00",
  },
  {
    userId: 4,
    username: "bob_brown",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    lastActive: "2024-08-09T11:50:00",
  },
  {
    userId: 5,
    username: "charlie_clark",
    name: "Charlie Clark",
    email: "charlie.clark@example.com",
    lastActive: "2024-08-09T10:15:00",
  },
  {
    userId: 6,
    username: "alice_jones",
    name: "Alice Jones",
    email: "alice.jones@example.com",
    lastActive: "2024-08-09T12:20:00",
  },
  {
    userId: 7,
    username: "bob_brown",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    lastActive: "2024-08-09T11:50:00",
  },
];


export const usersList:Array<UsersType> = [
  {
    id: 1,
    username: "john_doe",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    lastActive: "2024-08-09T14:30:00", // Date and time in ISO format
  },
  {
    id: 2,
    username: "jane_smith",
    name: "Jane Smith",
    status: "active",
    email: "jane.smith@example.com",
    lastActive: "2024-08-09T13:45:00",
  },
  {
    id: 3,
    username: "alice_jones",
    name: "Alice Jones",
    status: "active",
    email: "alice.jones@example.com",
    lastActive: "2024-08-09T12:20:00",
  },
  {
    id: 4,
    username: "bob_brown",
    name: "Bob Brown",
    status: "banned",
    email: "bob.brown@example.com",
    lastActive: "2024-08-09T11:50:00",
  },
  {
    id: 5,
    username: "charlie_clark",
    name: "Charlie Clark",
    status: "active",
    email: "charlie.clark@example.com",
    lastActive: "2024-08-09T10:15:00",
  },
  {
    id: 6,
    username: "alice_jones",
    name: "Alice Jones",
    status: "active",
    email: "alice.jones@example.com",
    lastActive: "2024-08-09T12:20:00",
  },
  {
    id: 7,
    username: "bob_brown",
    name: "Bob Brown",
    status: "banned",
    email: "bob.brown@example.com",
    lastActive: "2024-08-09T11:50:00",
  },
  {
    id: 8,
    username: "charlie_clark",
    name: "Charlie Clark",
    status: "active",
    email: "charlie.clark@example.com",
    lastActive: "2024-08-09T10:15:00",
  },
  {
    id: 9,
    username: "alice_jones",
    name: "Alice Jones",
    status: "active",
    email: "alice.jones@example.com",
    lastActive: "2024-08-09T12:20:00",
  },
  {
    id: 10,
    username: "bob_brown",
    name: "Bob Brown",
    status: "banned",
    email: "bob.brown@example.com",
    lastActive: "2024-08-09T11:50:00",
  },
  {
    id: 11,
    username: "bob_brown",
    name: "Bob Brown",
    status: "banned",
    email: "bob.brown@example.com",
    lastActive: "2024-08-09T11:50:00",
  },

]