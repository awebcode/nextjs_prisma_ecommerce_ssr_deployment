import { NextResponse } from "next/server";
import { VerifyToken } from "./JwtTokehelper";

export async function CheckMiddlewareOnDashboard(req) {
  try {
    const token = req.cookies.get("token");

    if (!token) {
      throw new Error("Token not found in cookies");
    }

    const payload = await VerifyToken(token["value"]);

    if (!payload.email || !payload.id) {
      throw new Error("Invalid token payload");
    }

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload.email);
    requestHeader.set("id", payload.id);

    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export async function CheckMiddlewareForCustomer(req) {
  try {
    const token = req.cookies.get("usertoken");

    if (!token) {
      throw new Error("Token not found in cookies");
    }

    const payload = await VerifyToken(token["value"]);
    console.log(payload);
    if (!payload.email || !payload.id) {
      throw new Error("Invalid token payload");
    }

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload.email);
    requestHeader.set("id", payload.id);

    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (error) {
    console.log("Middleware Error:", error);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

// to set up innnvoicce then api then put storeuser id, product id then boom im done
