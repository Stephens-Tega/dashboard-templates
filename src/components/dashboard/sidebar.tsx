"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BarChart3,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar({
  open = false,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 md:relative md:translate-x-0 w-64 border-r border-border bg-card ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-border p-4 flex items-center justify-between md:p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => onClose && onClose()}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-2 transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <div className="mb-4 rounded-lg bg-muted p-4">
            <p className="text-xs text-muted-foreground">Logged in as</p>
            <p className="font-semibold">{user?.fullName || "User"}</p>
          </div>
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}

function LogoutButton() {
  const { signOut } = useClerk();

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2"
      onClick={() => signOut()}
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </Button>
  );
}
