import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { userId: string; courseId: string } }
) {
  try {
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        isPublished: true,
      },
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: params.userId,
          courseId: params.courseId,
        },
      },
    });

    if (!purchase) {
      return new NextResponse("Not found", { status: 404 });
    }
    // add the logic here for creating custom certificate
    const certificate = await db.certificate.create({
      data: {
        userId: params.userId,
        courseId: params.courseId,
        name: course.title,
        url: course.title,
      },
    });

    return NextResponse.json(certificate);
  } catch (error) {
    console.log("[COURSE_ID_CERTIFICATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
