import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    console.log("");
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail" });
  }
}
