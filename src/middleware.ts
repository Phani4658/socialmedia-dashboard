import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";

const protectedRoutes = ["/users", "/", "/posts"];
export default function middleware(req: any) {
  const session = req.cookies.get("isLoggedIn") && req.cookies.get("isLoggedIn").value === "true" ? true : false;
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}
