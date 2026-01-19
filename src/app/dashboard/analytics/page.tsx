"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart, PieChart, LineChart, Line, Bar, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const analyticsData = [
  { month: "Jan", visits: 4000, bounce: 24 },
  { month: "Feb", visits: 3000, bounce: 14 },
  { month: "Mar", visits: 2000, bounce: 9.6 },
  { month: "Apr", visits: 2780, bounce: 39.8 },
  { month: "May", visits: 1890, bounce: 48 },
  { month: "Jun", visits: 2390, bounce: 38 },
];

const deviceData = [
  { name: "Desktop", value: 65 },
  { name: "Mobile", value: 25 },
  { name: "Tablet", value: 10 },
];

const COLORS = ["#3b82f6", "#ef4444", "#10b981"];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed analytics and performance metrics for your application.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Visits</p>
          <p className="mt-2 text-3xl font-bold">18,340</p>
          <p className="mt-2 text-sm text-green-600">+12% from last month</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Avg. Session</p>
          <p className="mt-2 text-3xl font-bold">4m 32s</p>
          <p className="mt-2 text-sm text-green-600">+2% from last month</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Bounce Rate</p>
          <p className="mt-2 text-3xl font-bold">32.4%</p>
          <p className="mt-2 text-sm text-red-600">+4% from last month</p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-6 text-lg font-semibold">Visit Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visits" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="mb-6 text-lg font-semibold">Device Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
