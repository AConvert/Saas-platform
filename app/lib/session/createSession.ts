import { cookies } from "next/headers";
import { SessionPayload } from "../data-definitions";
import { encrypt } from "./session";

export async function createSession(payload: SessionPayload) {
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt(payload, expires);

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}
