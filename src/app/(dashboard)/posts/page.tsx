import React from "react";
import { DataTable } from "../../../components/ui/data-table";
import { postColumns } from "../../../components/ui/columns";
import { postKPICards, postList, userKPICards, usersList } from "@/constants";
import KPICard from "@/components/shared/KPICard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Posts = () => {
  return (
    <div className="py-10 mb-3 flex-1 px-5 lg:px-10">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:mb-8 mb-3">
        {postKPICards.map((cardDetails) => (
          <KPICard key={cardDetails.title} cardDetails={cardDetails} />
        ))}
      </div>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Recently Published Posts</CardTitle>
            <CardDescription>View of recently published Posts.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={postColumns} data={postList} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Posts;
