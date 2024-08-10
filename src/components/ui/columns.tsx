"use client";

import { Button } from "@/components/ui/button";
import { getTimeAgo } from "@/helpers";
import {  UsersType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<UsersType>[] = [
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
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3 justify-center">
          <Button>Ban</Button>
          <Button>Delete</Button>
        </div>
      );
    },
  },
];
