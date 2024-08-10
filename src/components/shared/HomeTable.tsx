import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentlyActiveUsers } from "@/constants";
import { getTimeAgo } from "@/helpers";



const HomeTable = () => {
  return (
    <Table>
      <TableCaption>Recently Active Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-right">Last Active</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentlyActiveUsers.map((user) => (
          <TableRow key={user.userId}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-right">
              {getTimeAgo(user.lastActive)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HomeTable;
