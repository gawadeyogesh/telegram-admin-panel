"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, ShoppingCart, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back • Overview of your cloud deals platform • February 26, 2026
        </p>
      </div>

      {/* Stats Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Total Users */}
        <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,284</div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        {/* Total Products */}
        <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Products
            </CardTitle>
            <Package className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">124</div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +8.3% from last month
            </p>
          </CardContent>
        </Card>

        {/* Pending Orders */}
        <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Orders
            </CardTitle>
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600 dark:text-red-500">12</div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-2 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +33.3% from last week
            </p>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              ₹2,84,560
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +18.7% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Sections */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity / Chart Placeholder */}
        <Card className="md:col-span-4 border border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[320px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
              <div className="text-center text-muted-foreground">
                <p className="text-lg font-medium">Charts & Recent Orders</p>
                <p className="text-sm mt-2">Coming soon – real-time analytics integration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats / Alerts */}
        <Card className="md:col-span-3 border border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Quick Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Low Stock Items</span>
                <span className="text-sm font-medium text-red-600 dark:text-red-400">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New Users Today</span>
                <span className="text-sm font-medium">23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pending Refunds</span>
                <span className="text-sm font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">4.8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}