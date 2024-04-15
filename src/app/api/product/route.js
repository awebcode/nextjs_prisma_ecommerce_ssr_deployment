import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

// create product
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    let reqBody = await req.json();
    reqBody.userId = user_id;

    const result = await prisma.product.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// update product
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");
    let product_id = searchParams.get("product_id");

    let reqBody = await req.json();
    const result = await prisma.product.update({
      where: {
        id: product_id,
        userId: user_id,
      },
      data: reqBody,
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// // Get all product
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    const result = await prisma.product.findMany({
      where: {
        userId: user_id,
      },
      select: {
        id: true,
        brand: true,
        name: true,
        categoryId: true,
        discountPercentage: true,
        price: true,
        unit: true,
        imagurl: true,
      },
    });

    // if (result.length <= 0) {
    //   return NextResponse.json({ status: "Data not found" });
    // }

    return NextResponse.json({ status: "Data found", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// // delete product

export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");
    let user_id = searchParams.get("user_id");

    const result = await prisma.product.delete({
      where: {
        id: product_id,
        userId: user_id,
      },
    });
    return NextResponse.json({ status: "Delete Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// get singel product
export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let product_id = searchParams.get("product_id");
    let user_id = searchParams.get("user_id");

    const result = await prisma.product.findUnique({
      where: {
        id: product_id,
        userId: user_id,
      },
      select: {
        name: true,
        brand: true,
        description: true,
        discountPercentage: true,
        imagurl: true,
        price: true,
        title: true,
        unit: true,
      },
    });
    return NextResponse.json({ status: "Find Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
