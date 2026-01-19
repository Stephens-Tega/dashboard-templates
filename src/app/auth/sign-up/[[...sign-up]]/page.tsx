import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-slate-400">Create your account to get started</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
              headerTitle: "text-slate-900 dark:text-white",
              headerSubtitle: "text-slate-600 dark:text-slate-400",
              socialButtonsBlockButton: "bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600",
              formFieldInput: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white",
              formFieldLabel: "text-slate-700 dark:text-slate-300",
              footerActionLink: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
            },
          }}
        />
      </div>
    </div>
  );
}
