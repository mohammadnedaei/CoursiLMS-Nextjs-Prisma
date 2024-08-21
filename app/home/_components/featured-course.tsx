"use client";
import { getAuthorName } from "@/actions/get-author-name";
import { formatPrice } from "@/lib/format";
import { createClerkClient } from "@clerk/backend";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FeaturedCourseProps {
  course: {
    id: string;
    userId: string;
    author: string;
    authorImageUrl: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  };
}

export const FeaturedCourse: React.FC<FeaturedCourseProps> = ({ course }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${course.id}`);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-xl font-semibold md:text-2xl mb-4">
              Featured Course
            </h2>
            <p className="text-xl text-gray-400">
              A handpicked course to enhance your skills and knowledge.
            </p>
          </div>

          {/* Featured course */}
          <div
            onClick={handleClick}
            className="flex flex-col md:flex-row items-center md:items-start p-6 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-200"
            data-aos="fade-up"
          >
            <div className="mb-6 md:mb-0 md:mr-6">
              <Image
                className="rounded-lg w-100 max-w-max"
                src={course.imageUrl}
                width={300}
                height={200}
                alt={course.title}
              />
            </div>
            <div className="w-100">
              <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                {course.title}
              </h3>
              <p className="text-lg text-gray-400 mb-4 break-words break-all">
                {course.description}
              </p>
              <p className="text-sm font-semibold text-gray-400 flex flex-row gap-x-2 items-center">
                <Image
                  src={course.authorImageUrl}
                  width={30}
                  height={30}
                  className="rounded-full"
                  alt="profile"
                />{" "}
                {course.author}
              </p>
              <p className="text-sm font-semibold text-gray-400 mt-6">
                Enroll with {formatPrice(course.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
