import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;

  const { pathname } = request.nextUrl;

  const isHeartPage = pathname === "/heart";

  if (isHeartPage && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/heart"],
};
