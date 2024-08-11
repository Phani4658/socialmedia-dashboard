"use client";

import React, { useState } from "react";
import { DataTable } from "../../../components/ui/data-table";
import { userColumns } from "../../../components/ui/columns";
import { userKPICards, usersList } from "@/constants";
import KPICard from "@/components/shared/KPICard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/types";

enum status {
  ACTIVE = "active",
  BANNED = "banned",
}

const Users = () => {
  const [users, setUsers] = useState<User[]>(usersList);

  const onClickBan = (userId: number) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: status.BANNED } : user
    );
    setUsers(updatedUsers);
  };

  const onClickDelete = (userId: number) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };
  const columns = [
    ...userColumns,
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: { row: any }) => {
        const user: User = row.original;
        return (
          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => {
                onClickBan(user.id);
              }}
            >
              Ban
            </Button>
            <Button
              onClick={() => {
                onClickDelete(user.id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="py-10 mb-3 flex-1 px-5 lg:px-10">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:mb-8 mb-3">
        {userKPICards.map((cardDetails) => (
          <KPICard key={cardDetails.title} cardDetails={cardDetails} />
        ))}
      </div>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Recently Active Users</CardTitle>
            <CardDescription>View of recently active users.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
