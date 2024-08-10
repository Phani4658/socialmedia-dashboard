import React from "react";
import { DataTable } from "../../../components/ui/data-table";
import { columns } from "../../../components/ui/columns";
import { userKPICards, usersList } from "@/constants";
import KPICard from "@/components/shared/KPICard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const recentlyActiveUsers: any = [
  {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    name: "John Doe",
    status: "active",
    lastActive: "2024-08-09T14:30:00", // Date and time in ISO format
  },
  {
    id: 2,
    username: "janesmith",
    email: "jane@example.com",
    name: "Jane Smith",
    status: "banned",
    lastActive: "2024-08-09T13:45:00", // Date and time in ISO format
  },
];

const Users = () => {
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
          <DataTable columns={columns} data={usersList} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
