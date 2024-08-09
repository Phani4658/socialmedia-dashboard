"use client";

import { redirect, useRouter } from "next/navigation";
import React from "react";
import Cookie from "js-cookie";

const Dashboard = () => {
  const isLoggedIn = Cookie.get("isLoggedIn");
  if (isLoggedIn && isLoggedIn !== "true") {
    redirect("/login");
  }
  return <h1>Home Page</h1>;
};

export default Dashboard;
