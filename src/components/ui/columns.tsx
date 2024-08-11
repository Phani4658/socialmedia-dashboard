"use client";

import { Button } from "@/components/ui/button";
import { getTimeAgo } from "@/helpers";
import { Post, User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "active") {
        return (
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4aa24e]"></div>
            <p>Active</p>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E32200]"></div>
          <p>Banned</p>
        </div>
      );
    },
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: ({ row }) => {
      const lastActive = new Date(row.getValue("lastActive"));
      return (
        <div className="flex items-center justify-center gap-2">
          <p>{getTimeAgo(lastActive)}</p>
        </div>
      );
    },
  },
];

export const homeUserColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "active") {
        return (
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4aa24e]"></div>
            <p>Active</p>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E32200]"></div>
          <p>Banned</p>
        </div>
      );
    },
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: ({ row }) => {
      const lastActive = new Date(row.getValue("lastActive"));
      return (
        <div className="flex items-center justify-center gap-2">
          <p>{getTimeAgo(lastActive)}</p>
        </div>
      );
    },
  },
];

type author = {
  name: string;
  username: string;
  avatar: string;
};

export const postColumns: ColumnDef<Post>[] = [
  {
    accessorKey: "author",
    header: "Posted By",
    cell: ({ row }) => {
      const author: author = row.getValue("author");
      return (
        <div className="flex gap-2 justify-center">
          <Avatar className="h-5 w-5">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      const content: string = row.getValue("content");
      return <p className="lg:max-w-[240px] text-center">{content}</p>;
    },
  },
  {
    accessorKey: "media",
    header: "Media",
    cell: ({ row }) => {
      const media: Array<string> = row.getValue("media");
      return !media ? (
        <p className="">-</p>
      ) : (
        <ul>
          {media.map((link, index) => (
            <li key={link}>
              <Link
                href={link}
                target="_blank"
                className="underline text-blue-500"
              >
                Media {index}
              </Link>
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "published") {
        return (
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4aa24e]"></div>
            <p>Published</p>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E32200]"></div>
          <p>Hidden</p>
        </div>
      );
    },
  },
  {
    accessorKey: "likes",
    header: "Likes",
    cell: ({ row }) => {
      const likes: number = row.getValue("likes");
      return <p>{likes} Likes</p>;
    },
  },
  {
    accessorKey: "comments",
    header: "Comments",
    cell: ({ row }) => {
      const comments: number = row.getValue("comments");
      return <p>{comments} comments</p>;
    },
  },
  {
    accessorKey: "timestamp",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = new Date(row.getValue("timestamp"));
      return <p>{getTimeAgo(createdAt)}</p>;
    },
  },
];

export const homePostColumns: ColumnDef<Post>[] = [
  {
    accessorKey: "author",
    header: "Posted By",
    cell: ({ row }) => {
      const author: author = row.getValue("author");
      return (
        <div className="flex gap-2 justify-center">
          <Avatar className="h-5 w-5">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "published") {
        return (
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4aa24e]"></div>
            <p>Published</p>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E32200]"></div>
          <p>Hidden</p>
        </div>
      );
    },
  },
  {
    accessorKey: "likes",
    header: "Likes",
    cell: ({ row }) => {
      const likes: number = row.getValue("likes");
      return <p>{likes} Likes</p>;
    },
  },
  {
    accessorKey: "comments",
    header: "Comments",
    cell: ({ row }) => {
      const comments: number = row.getValue("comments");
      return <p>{comments} comments</p>;
    },
  },
];
