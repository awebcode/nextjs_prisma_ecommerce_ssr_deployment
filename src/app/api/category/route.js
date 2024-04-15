import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

// create category
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    let reqBody = await req.json();
    reqBody.userId = user_id;

    const result = await prisma.category.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// update category
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");
    let category_id = searchParams.get("category_id");

    let reqBody = await req.json();
    const result = await prisma.category.update({
      where: {
        id: category_id,
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

// // Get all category
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let user_id = searchParams.get("user_id");

    const result = await prisma.category.findMany({
      where: {
        userId: user_id,
      },
    });
    return NextResponse.json({ status: "Data found", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// // delete category

export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let category_id = searchParams.get("category_id");
    let user_id = searchParams.get("user_id");
    console.log(category_id, user_id);
    const result = await prisma.category.delete({
      where: {
        id: category_id,
        userId: user_id,
      },
    });
    return NextResponse.json({ status: "Delete Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}

// get singel category
export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let category_id = searchParams.get("category_id");
    let user_id = searchParams.get("user_id");

    const result = await prisma.category.findUnique({
      where: {
        id: category_id,
        userId: user_id,
      },
      select: {
        name: true,
        id: true,
      },
    });
    return NextResponse.json({ status: "Find Successfully", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
