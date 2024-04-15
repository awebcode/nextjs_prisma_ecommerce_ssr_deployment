import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let reqbody = await req.json();
    const result = await prisma.customers.create({ data: reqbody });
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
