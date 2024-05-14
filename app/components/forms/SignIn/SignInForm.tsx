"use client";

import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/app/components/ui/card";

import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { useFormState } from "react-dom";
import { loginUser } from "@/app/data/actions/auth-actions";
import ZodErrors from "@/app/components/Errors/ZodErrors";

export function SigninForm() {
  const INITIAL_STATE = {
    data: null,
  };

  const [formState, formAction] = useFormState(loginUser, INITIAL_STATE);
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="username or email"
              />
            </div>
            <ZodErrors errors={formState?.zodErrors?.email} />
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            <ZodErrors errors={formState?.zodErrors?.password} />
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full bg-primary text-white hover:bg-hoverPrimary py-2 px-3 rounded-md">
              Sign In
            </button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
