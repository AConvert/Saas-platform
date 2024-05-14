"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/app/data/actions/auth-actions";
import ZodErrors from "@/components/Errors/ZodErrors";
import { useFormStatus } from "react-dom";

export function SignupForm() {
  const INITIAL_STATE = {
    data: null,
  };
  const [formState, formAction] = useFormState(registerUser, INITIAL_STATE);
  const { pending } = useFormStatus();
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card className="border-secondary border-opacity-50">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="border-none outline-none focus:ring-0 rounded-md"
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
                className="border-none outline-none focus:ring-0 rounded-md"
              />
            </div>
            <ZodErrors errors={formState?.zodErrors?.password} />
          </CardContent>
          <CardFooter className="flex flex-col">
            <button
              aria-disabled={pending}
              className="w-full bg-primary text-white hover:bg-hoverPrimary py-2 px-3 rounded-md"
            >
              {pending ? "Submitting" : "Sign Up"}
            </button>
            <p className=" text-error text-xs italic mt-1 py-2">
              {formState?.message}
            </p>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href="signin">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
