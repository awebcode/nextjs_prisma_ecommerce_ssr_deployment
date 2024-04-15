import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.product.findMany();
    console.log(result);
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");

    const result = await prisma.product.findUnique({
      where: {
        id: product_id,
      },
    });
    return NextResponse.json({ status: "Find Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
