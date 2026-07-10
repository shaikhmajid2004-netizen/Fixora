import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Fixora API is working 🚀",
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Fixora Register API is working 🚀",
  });
}