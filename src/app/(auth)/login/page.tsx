"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginForm() {
  const router = useRouter();
  const session = Cookies.get('isLoggedIn') === "true" ? true : false;
  const onClickSignIn = async (event: any) => {
    event.preventDefault();
    // Perform login logic here
    Cookies.set("isLoggedIn", "true");
    router.push("/");
  };

  useEffect(() => {
    const session = Cookies.get('isLoggedIn') === "true" ? true : false;
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onClickSignIn}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
