import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function POST(req, res) {
  try {
    
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

export async function GET(req, res) {
  try {
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
