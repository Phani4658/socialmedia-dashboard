import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/shared/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Dashboard",
  description: "Instagram Dashboard Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased flex flex-col lg:flex-row lg:gap-10 bg-[#F5F6FA]",
          inter.style
        )}
      >
        <SideBar />
        {children}
      </body>
    </html>
  );
}
