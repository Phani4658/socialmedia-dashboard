"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Growth } from "@/components/shared/Growth";
import KPICard from "@/components/shared/KPICard";
import { kpiCardDetails, postList, usersList } from "@/constants";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeDataTable } from "@/components/ui/home-data-table";
import { homePostColumns, homeUserColumns } from "@/components/ui/columns";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="py-10 px-5 flex-1 w-full">
      <h1 className="text-3xl font-bold mb-4 px-5">
        Welcome <span>Spartificial</span>
      </h1>
      <div className="lg:flex lg:gap-5">
        <div className="flex-1 lg:max-w-[60%]">
          <div>
            <Growth />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-3">
            {kpiCardDetails.map((details) => (
              <KPICard key={details.title} cardDetails={details} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <Card className="px-4">
            <CardHeader className="pl-0 flex flex-row items-center justify-between">
              <CardTitle>Recently Active Users</CardTitle>
              <Button variant="secondary" onClick={() => {router.push('/users')}}>
                View All <ArrowRight size={16} />
              </Button>
            </CardHeader>
            <HomeDataTable
              columns={homeUserColumns}
              data={usersList.slice(0, 8)}
            />
          </Card>
          <Card className="px-4">
            <CardHeader className="pl-0 flex flex-row items-center justify-between">
              <CardTitle>Recently Published Posts</CardTitle>
              <Button variant="secondary" onClick={() => {router.push('/posts')}}>
                View All <ArrowRight size={16} />
              </Button>
            </CardHeader>
            <HomeDataTable
              data={postList.slice(0, 8)}
              columns={homePostColumns}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
