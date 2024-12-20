import { Chapter, Course, UserProgress } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { db } from "@/lib/db";
import { CourseSidebarItem } from "@/app/(course)/courses/[courseId]/_components/course-sidebar-item";
import { CourseProgress } from "@/components/course-progress";
import { Button } from "@/components/ui/button";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseSidebar = async ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  const { userId } = auth();

  if (!userId) return redirect("/");
  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  const certificate = await db.certificate.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>
        {purchase && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )}
        {certificate && (
          <div className="mt-10 w-100 flex items-center justify-center">
            <a
              target="_blank"
              href={certificate.url}
              className="w-80 px-1 py-3 rounded-md text-center text-white bg-gray-800/90"
            >
              Get certificate
            </a>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  );
};
