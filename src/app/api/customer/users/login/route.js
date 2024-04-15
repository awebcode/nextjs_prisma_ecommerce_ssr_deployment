import { CreateToken } from "@/utility/JwtTokehelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const { email, password } = await req.json();
    const result = await prisma.customers.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    if (!result) {
      return NextResponse.json({ status: "Sorry this not valid information" });
    } else {
      let token = await CreateToken(result["email"], result["id"]);
      console.log(token, "create token");
      const experiData = new Date(Date.now() + 24 * 60 * 60 * 3600);
      const cookieString = `usertoken=${token}; expires=${experiData.toUTCString()}; path=/ `;
      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (error) {
    console.log(error, "this is api error");
    return NextResponse.json({ status: "fail" });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let customer_id = searchParams.get("user_id");

    const result = await prisma.customers.findUnique({
      where: {
        id: customer_id,
      },
      select: {
        email: true,
        firstName: true,
        lastName: true,
        id: true,
      },
    });

    return NextResponse.json({ status: "Data found", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
