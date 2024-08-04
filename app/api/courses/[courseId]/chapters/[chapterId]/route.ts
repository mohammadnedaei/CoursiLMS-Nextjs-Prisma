import {NextResponse} from "next/server";
import Mux from "@mux/mux-node"
import {auth} from "@clerk/nextjs";
import {db} from "@/lib/db";

const {Video} = new Mux(
    process.env.MUX_TOKEN_ID,
    process.env.MUX_TOKEN_SECRET
)

export async function PATCH(
    req: Request,
    {params}: { params: { courseId: string; chapterId: string } }
) {
    try {
        const {userId} = auth();
        const {isPublished, ...values} = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId
            }
        });

        if (!ownCourse) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const chapter = await db.chapter.update({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
            data: {
                ...values,
            }
        })

        // TODO: handle video upload

        return NextResponse.json(chapter)

    } catch (error) {
        console.log("[COURSES_CHAPTER_ID]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
}
