"use client";

import { useState } from "react";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  AlertCircle,
  Clock,
  Home,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LowStockItem } from "@/types";

export default function DashboardOverview({
  lowStockItems,
  dashboardSummary,
}: {
  lowStockItems: LowStockItem[];
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize with data directly - replace with actual API calls when ready
  const [stats] = useState({
    totalRevenue: 45280.5,
    totalOrders: 156,
    totalProducts: 48,
    totalUsers: 1243,
    revenueChange: 12.5,
    ordersChange: 8.3,
  });

  const [recentOrders] = useState([
    {
      id: "1",
      customer: "John Doe",
      email: "john@example.com",
      total: 299.99,
      status: "pending",
      date: "2024-03-15",
    },
    {
      id: "2",
      customer: "Jane Smith",
      email: "jane@example.com",
      total: 149.5,
      status: "delivered",
      date: "2024-03-15",
    },
    {
      id: "3",
      customer: "Mike Johnson",
      email: "mike@example.com",
      total: 499.0,
      status: "pending",
      date: "2024-03-14",
    },
    {
      id: "4",
      customer: "Sarah Williams",
      email: "sarah@example.com",
      total: 89.99,
      status: "delivered",
      date: "2024-03-14",
    },
    {
      id: "5",
      customer: "Tom Brown",
      email: "tom@example.com",
      total: 179.99,
      status: "pending",
      date: "2024-03-13",
    },
  ]);

  const [revenueData] = useState([
    { day: "Mon", amount: 4200 },
    { day: "Tue", amount: 3800 },
    { day: "Wed", amount: 5100 },
    { day: "Thu", amount: 4600 },
    { day: "Fri", amount: 6200 },
    { day: "Sat", amount: 7800 },
    { day: "Sun", amount: 5400 },
  ]);

  const maxRevenue = Math.max(...revenueData.map((d) => d.amount));

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Package, label: "Products", active: false },
    { icon: ShoppingCart, label: "Orders", active: false },
    { icon: Users, label: "Users", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Heno</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Section */}
          <div className="border-t p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-medium">
                AD
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Admin User</div>
                <div className="text-xs text-muted-foreground truncate">
                  admin@store.com
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-card flex items-center px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back, here is what is happening
            </p>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Revenue Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </CardTitle>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${stats.totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">
                    +{stats.revenueChange}%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Orders Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Orders
                </CardTitle>
                <ShoppingCart className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">+{stats.ordersChange}%</span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Products Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Products
                </CardTitle>
                <Package className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalProducts}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Active in store
                </p>
              </CardContent>
            </Card>

            {/* Users Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Users
                </CardTitle>
                <Users className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Registered customers
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Revenue Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Last 7 days performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-64 gap-4">
                  {revenueData.map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-muted rounded-t relative"
                        style={{ height: "100%" }}
                      >
                        <div
                          className="absolute bottom-0 w-full bg-primary rounded-t transition-all duration-500"
                          style={{
                            height: `${(item.amount / maxRevenue) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-3">
                        {item.day}
                      </div>
                      <div className="text-xs font-medium mt-1">
                        ${(item.amount / 1000).toFixed(1)}k
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Alerts */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <CardTitle>Low Stock Alert</CardTitle>
                </div>
                <CardDescription>Products running low</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lowStockItems.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No low stock items at the moment
                    </p>
                  ) : (
                    lowStockItems.map((item) => (
                      <div
                        key={`${item.productId}-${item.size}`}
                        className="flex items-start gap-3 pb-4 border-b last:border-0"
                      >
                        <div className="relative w-12 h-12 bg-muted rounded shrink-0 overflow-hidden">
                          <img
                            src={item.product.shopImage}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">
                            {item.product.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.product.category} • Size {item.size}
                          </div>
                          <div className="text-xs font-medium text-orange-600 mt-2">
                            {item.stock} {item.stock === 1 ? "item" : "items"}{" "}
                            left
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                        Order ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                        Total
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-4 py-4">
                          <div className="text-sm font-medium">#{order.id}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                              {order.customer
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="text-sm font-medium">
                              {order.customer}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-muted-foreground">
                            {order.email}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm font-medium">
                            ${order.total}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "delivered"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            }`}
                          >
                            {order.status === "delivered" ? (
                              "✓ Delivered"
                            ) : (
                              <>
                                <Clock className="w-3 h-3 mr-1" /> Pending
                              </>
                            )}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-muted-foreground">
                            {order.date}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
