import { Category, Course } from "@prisma/client";

import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
};

export const getPublicCourses = async (): Promise<
  CourseWithProgressWithCategory[]
> => {
  try {
    // fetch the course based on a specific filter here...
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
      },
      include: {
        category: true,
      },
    });

    const coursesWithProgress: CourseWithProgressWithCategory[] =
      await Promise.all(
        courses.map(async (course) => {
          return {
            ...course,
          };
        })
      );

    return coursesWithProgress;
  } catch (error) {
    console.log("[GET_PUBLIC_COURSES]", error);
    return [];
  }
};
