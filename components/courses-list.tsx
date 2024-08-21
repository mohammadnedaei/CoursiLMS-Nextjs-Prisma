"use client";
import { Category, Course } from "@prisma/client";
import { CourseCard } from "@/components/course-card";
import { useState } from "react";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({ items }: CoursesListProps) => {
  const [sortOrder, setSortOrder] = useState<
    "recommended" | "low-price" | "high-price"
  >("recommended");

  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "low-price") {
      return (a.price ?? 0) - (b.price ?? 0);
    } else if (sortOrder === "high-price") {
      return (b.price ?? 0) - (a.price ?? 0);
    }
    return 0; // "recommended" keeps the original order
  });

  return (
    <div>
      {/* Sort Options */}
      <div className="flex justify-end mb-4">
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(
              e.target.value as "recommended" | "low-price" | "high-price"
            )
          }
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="recommended">Recommended</option>
          <option value="low-price">Price: Low to High</option>
          <option value="high-price">Price: High to Low</option>
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {sortedItems.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            progress={item.progress}
            category={item?.category?.name!}
            author={item.author}
            authorImageUrl={item.authorImageUrl}
          />
        ))}
      </div>

      {/* No Courses Found */}
      {sortedItems.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses found
        </div>
      )}
    </div>
  );
};
