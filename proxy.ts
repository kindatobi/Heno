import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get("sessionCartId")) {
    response.cookies.set("sessionCartId", crypto.randomUUID());
  }

  const existingCurrency = request.cookies.get("currency")?.value;
  if (existingCurrency) {
    return response;
  }

  const manualCurrency = request.cookies.get("manual_currency")?.value;
  if (manualCurrency) {
    response.cookies.set("currency", manualCurrency);
    return response;
  }

  const country = request.headers.get("x-vercel-ip-country");
  const currency = country === "NG" ? "NGN" : "USD";

  response.cookies.set("currency", currency);

  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|.well-known/workflow/).*)",
    },
  ],
};
