import { SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "../data-definitions";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { v4 } from "uuid";

const secretKey = process.env.SESSION_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload, expires: Date) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 seconds")
    .sign(encodedKey);
}

export async function decrypt(session: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("session")?.value;
  if (!session) {
    return;
  }
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed, parsed.expires),
    httpOnly: true,
    secure: true,
    expires: parsed.expires,
  });
  return res;
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) {
    return;
  }

  return await decrypt(session);
}
