"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";
import { isAuthenticated } from "@/lib/auth";
import { usePathname, redirect } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Public pages (no sidebar/header)
  if (pathname === "/login") {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
  }

  // Protected pages - require login
  if (!isAuthenticated()) {
    redirect("/login");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <AdminSidebar />
        </aside>

        {/* Main Content */}
        <div className="lg:pl-64 flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Header */}
          <AdminHeader />

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}