"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useTheme } from "@/components/theme-provider";

export default function SettingsPage() {
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    email: user?.primaryEmailAddress?.emailAddress || "",
    fullName: user?.fullName || "",
    notifications: true,
    emailAlerts: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Settings saved:", formData);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences.
        </p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              disabled
            />
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Notifications</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-4 w-4 rounded"
            />
            <span className="text-sm">
              <div className="font-medium">Push Notifications</div>
              <div className="text-muted-foreground text-xs">
                Receive notifications about dashboard activities
              </div>
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="emailAlerts"
              checked={formData.emailAlerts}
              onChange={handleChange}
              className="h-4 w-4 rounded"
            />
            <span className="text-sm">
              <div className="font-medium">Email Alerts</div>
              <div className="text-muted-foreground text-xs">
                Receive email notifications for important events
              </div>
            </span>
          </label>
        </div>
      </Card>

      {/* Appearance Settings */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Appearance</h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="h-4 w-4 rounded"
            />
            <span className="text-sm">
              <div className="font-medium">Dark Mode</div>
              <div className="text-muted-foreground text-xs">
                Enable dark theme for the dashboard
              </div>
            </span>
          </label>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-200 dark:border-red-900">
        <h2 className="text-xl font-semibold mb-6 text-red-600">Danger Zone</h2>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </Card>
    </div>
  );
}
