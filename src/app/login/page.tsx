"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { setToken } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API delay (replace with real fetch/axios call later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (!email || !password) {
        throw new Error("Please enter both email and password");
      }

      // Mock success – in production: await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
      // const res = await response.json();
      // if (!res.success) throw new Error(res.message || "Login failed");
      // setToken(res.token);

      setToken("mock-jwt-token-for-testing");
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Top branding bar */}
      <div className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              CD
            </div>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
              Cloud Deals Admin
            </h1>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Secure Access Only
          </span>
        </div>
      </div>

      {/* Main login form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md shadow-2xl border-slate-200 dark:border-slate-800">
          <CardHeader className="space-y-3 pb-8">
            <CardTitle className="text-2xl text-center font-bold text-slate-900 dark:text-white">
              Admin Login
            </CardTitle>
            <CardDescription className="text-center text-slate-600 dark:text-slate-400">
              Sign in to manage your cloud deals platform
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error message */}
              {error && (
                <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm p-3 rounded-lg text-center">
                  {error}
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@clouddeals.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  autoComplete="email"
                  className="h-11"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="h-11"
                />
              </div>

              {/* Remember me */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
                >
                  Remember me for 30 days
                </Label>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full h-11 text-base font-medium bg-indigo-600 hover:bg-indigo-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col items-center space-y-4 pt-2 text-sm text-slate-500 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Cloud Deals. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                Contact Support
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}