import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const userName = await clerkClient.users.getUser(userId);
    const author = `${userName.firstName || ""} ${userName.lastName || ""}`;
    const authorImage = userName.imageUrl;
    const data = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const review = await db.review.create({
      data: {
        userId,
        courseId: params.courseId,
        title: data.title,
        rating: data.rating,
        author: author,
        authorImageUrl: authorImage,
        comment: data.comment,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.log("[REVIEW]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
