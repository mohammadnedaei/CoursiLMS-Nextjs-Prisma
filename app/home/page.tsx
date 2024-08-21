import { db } from "@/lib/db";
import Newsletter from "../(dashboard)/_components/newsletter";
import Testimonials from "../(dashboard)/_components/testimonials";
import Features from "./_components/features";
import Hero from "./_components/hero";
import Zigzag from "./_components/zigzag";
import { useState } from "react";
import { getPublicCourses } from "@/actions/get-public-courses";
import { PublicCategories } from "./_components/public-categories";
import { FeaturedCourse } from "./_components/featured-course";
const HomePage = async () => {
  const courses = await getPublicCourses();
  const featuredCourse = courses.length > 0 ? courses[0] : null;
  return (
    <>
      <Hero />
      <Features />
      {featuredCourse && <FeaturedCourse course={featuredCourse} />}
      <Zigzag />
      <PublicCategories />
      <Testimonials />
      <Newsletter />
    </>
  );
};
export default HomePage;
