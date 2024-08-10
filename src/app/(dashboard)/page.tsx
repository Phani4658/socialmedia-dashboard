"use client";

import { redirect, useRouter } from "next/navigation";
import React from "react";
import Cookie from "js-cookie";
import { Growth } from "@/components/shared/Growth";
import KPICard from "@/components/shared/KPICard";
import { kpiCardDetails } from "@/constants";
import HomeTable from "@/components/shared/HomeTable";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const isLoggedIn = Cookie.get("isLoggedIn");
  console.log(isLoggedIn)
  if (isLoggedIn && isLoggedIn !== "true") {
    redirect("/login");
  }
  return (
    <div className="py-10 px-5 flex-1 w-full" >
      <h1 className="text-3xl font-bold mb-4 px-5">
        Welcome <span>Spartificial</span>
      </h1>
      <div className="lg:flex lg:gap-5">
        <div className="flex-1 lg:max-w-[60%]">
          <div >
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
            <CardHeader className="pl-0">
              <CardTitle>Recently Active Users</CardTitle>
            </CardHeader>
            <HomeTable />
          </Card>
          <Card className="px-4">
            <CardHeader className="pl-0">
              <CardTitle>Recently Active Users</CardTitle>
            </CardHeader>
            <HomeTable />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
