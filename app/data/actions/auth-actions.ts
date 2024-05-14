// This is our first server action that we will use to register a user

"use server";

import { z } from "zod";
import { db } from "@/lib/database/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session/createSession";
import { v4 } from "uuid";

export async function registerUser(prevState: any, formData: FormData) {
  const schemaRegister = z.object({
    password: z.string().min(6).max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
  });

  const validateFields = schemaRegister.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      ...prevState,
      zodErrors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to register user.",
    };
  }

  try {
    // check if a user email is already on the database
    const userRef = doc(db, "users", `${formData.get("email")}`);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return {
        ...prevState,
        message: "User already exists",
      };
    }

    const userId = v4();

    // register user that is not on the database already
    await setDoc(doc(db, "users", `${formData.get("email")}`), {
      email: formData.get("email"),
      password: formData.get("password"),
      userId: userId,
    });

    await createSession({ userId });
  } catch (error) {
    return {
      ...prevState,
      errorMessage: "Failed to register user",
    };
  }

  redirect("/dashboard");
}

export async function loginUser(prevState: any, formData: FormData) {
  const schemaLogin = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(6).max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
  });

  const validateFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      ...prevState,
      zodErrors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to login user.",
    };
  }

  try {
    const userRef = doc(db, "users", `${formData.get("email")}`);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      return {
        ...prevState,
        userError: "User does not exist",
      };
    }

    const user = docSnap.data();

    if (user?.password !== formData.get("password")) {
      return {
        ...prevState,
        passwordError: "Invalid password",
      };
    }

    await createSession({
      userId: v4(),
    });
  } catch (error) {
    return {
      ...prevState,
      errorMessage: "Failed to login user",
    };
  }

  redirect("/dashboard");
}
