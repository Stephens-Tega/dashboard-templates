"use client";

import React from "react";
import { BarChart3, Users, TrendingUp, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

export function StatsOverview() {
  const stats = [
    {
      title: "Total Users",
      value: "12,345",
      icon: Users,
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Revenue",
      value: "$54,231",
      icon: TrendingUp,
      trend: "+8%",
      trendUp: true,
    },
    {
      title: "Active Sessions",
      value: "2,847",
      icon: Activity,
      trend: "-3%",
      trendUp: false,
    },
    {
      title: "Total Transactions",
      value: "8,934",
      icon: BarChart3,
      trend: "+23%",
      trendUp: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="rounded-lg bg-muted p-2">
                <IconComponent className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.trendUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend}
              </span>
              <span className="text-sm text-muted-foreground"> from last month</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
