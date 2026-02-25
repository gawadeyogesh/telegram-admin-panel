"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const mockOrders = [
  { id: "ORD001", user: "Yogesh", product: "ChatGPT Plus", amount: 499, status: "Pending", date: "2026-02-25" },
  { id: "ORD002", user: "Mr. Gavade", product: "Azure Credits", amount: 799, status: "Completed", date: "2026-02-24" },
  { id: "ORD003", user: "Ram", product: "VPS 2GB", amount: 1499, status: "Cancelled", date: "2026-02-23" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Orders Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.user}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>₹{order.amount}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                          order.status === "Pending" && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                          order.status === "Completed" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                          order.status === "Cancelled" && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        )}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}