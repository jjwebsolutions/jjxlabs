import { NextResponse } from "next/server";
import { submitContact } from "@/actions/contact";
export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await submitContact(formData);

  if (!result) {
    return NextResponse.json({ error: result }, { status: 400 });
  }

  return NextResponse.json({ message: result.success });
}
