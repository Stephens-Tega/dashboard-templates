"use client";

import { RevenueChart, TrendChart } from "@/components/dashboard/charts";
import { StatsOverview } from "@/components/dashboard/stats-overview";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard. Here's your performance overview.
        </p>
      </div>

      <StatsOverview />

      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart />
        <TrendChart />
      </div>
    </div>
  );
}
