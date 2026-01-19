"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-black">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Dashboard</div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/auth/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-900 dark:text-blue-100 mb-4">
            ✨ Modern Dashboard Template
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
            Beautiful, Modern Dashboard
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            A production-ready Next.js dashboard template with authentication, data visualization, user management, and more. Built with modern tech stack.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Link href="/auth/sign-up">
              <Button size="lg" className="text-lg px-8">
                Start Building
              </Button>
            </Link>
            <Link href="/auth/sign-in">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Data Visualization</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Beautiful charts and graphs powered by Recharts. Visualize your data with ease.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-lg font-semibold mb-2">Secure Auth</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Enterprise-grade authentication with Clerk. Manage users securely.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">High Performance</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Built with Next.js 16. Lightning-fast, optimized, and production-ready.
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">✨ Features</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>✓ Responsive design</li>
                <li>✓ Dark mode support</li>
                <li>✓ User management</li>
                <li>✓ Analytics & charts</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">🛠️ Tech Stack</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>✓ Next.js 16 with App Router</li>
                <li>✓ TailwindCSS & shadcn/ui</li>
                <li>✓ Clerk Authentication</li>
                <li>✓ Drizzle ORM + PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Dashboard Templates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
