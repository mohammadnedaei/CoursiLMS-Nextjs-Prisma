import {Chapter, Course, UserProgress} from "@prisma/client";
import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";
import {db} from "@/lib/db";

interface CourseSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null;
        })[]
    },
    progressCount: number;
}

export const CourseSidebar = async ({course, progressCount}: CourseSidebarProps) => {
    const {userId} = auth()

    if (!userId) return redirect("/")

    const purchase = await db.purchase.findUnique({
        where: {}
    })

    return (
        <div>
            s
        </div>
    )
}