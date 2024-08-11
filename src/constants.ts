import { Briefcase, Users } from "lucide-react";
import { User, Post } from "./types";

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

export const postKPICards = [
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
];


export const usersList: Array<User> = [
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
];

export const postList: Post[] = [
  {
    id: 1,
    author: {
      username: "johndoe",
      name: "John Doe",
      avatar: "https://avatar.iran.liara.run/public/53",
    },
    content: "Had a great day exploring the city! #adventure",
    timestamp: "2024-08-09T14:30:00",
    likes: 120,
    comments: 15,
    status: "published",
    media: [
      "https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 2,
    author: {
      username: "janesmith",
      name: "Jane Smith",
      avatar: "https://avatar.iran.liara.run/public/51",
    },
    content:
      "Just finished a fantastic book on modern art. Highly recommend! #reading",
    timestamp: "2024-08-09T13:45:00",
    likes: 95,
    comments: 8,
    status: "published",
  },
  {
    id: 3,
    author: {
      username: "alicejones",
      name: "Alice Jones",
      avatar: "https://avatar.iran.liara.run/public/42",
    },
    content:
      "Excited to start my new project on web development. Stay tuned for updates! #webdev",
    timestamp: "2024-08-09T12:20:00",
    likes: 150,
    comments: 20,
    status: "hidden",
  },
  {
    id: 4,
    author: {
      username: "bobbrown",
      name: "Bob Brown",
      avatar: "https://avatar.iran.liara.run/public/18",
    },
    content: "Beautiful sunset at the beach today. #nature #sunset",
    timestamp: "2024-08-09T11:50:00",
    likes: 200,
    comments: 30,
    status: "published",
  },
  {
    id: 5,
    author: {
      username: "charlieclark",
      name: "Charlie Clark",
      avatar: "https://avatar.iran.liara.run/public/18",
    },
    content:
      "Cooked a delicious meal tonight. Here’s the recipe! #cooking #food",
    timestamp: "2024-08-09T10:15:00",
    likes: 80,
    comments: 12,
    status: "published",
  },
];
