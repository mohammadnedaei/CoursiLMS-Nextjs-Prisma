import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const userName = await clerkClient.users.getUser(userId);
    const author = `${userName.firstName || ""} ${userName.lastName || ""}`;
    const authorImage = userName.imageUrl;
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        author,
        authorImageUrl: authorImage,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
