import { NextRequest } from "next/server";
import { updateSession } from "./app/lib/session/session";

export function middleware(request: NextRequest) {
  return updateSession(request);
}
