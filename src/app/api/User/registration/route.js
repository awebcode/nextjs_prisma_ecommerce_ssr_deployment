import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    console.log(reqBody);
    const result = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail" });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.users.findMany();
    return NextResponse.json({ status: "data", data: result });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ status: "fail", data: error });
  }
}
