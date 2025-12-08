import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get("sessionCartId")) {
    const sessionCartId = crypto.randomUUID();
    response.cookies.set("sessionCartId", sessionCartId);
  }

  return response;
}
