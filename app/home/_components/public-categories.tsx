import CategoryImage01 from "@/public/images/category-01.jpg";
import CategoryImage02 from "@/public/images/category-02.jpg";
import CategoryImage03 from "@/public/images/category-03.jpg";
import CategoryImage04 from "@/public/images/category-04.jpg";
import { CategoryCard } from "./category-card";

export const PublicCategories = () => {
  // Fetch you own categories here...
  const categories = [
    {
      id: "6055a4ce-ce17-46de-a3e8-055cd3a15d5a",
      imageSrc: CategoryImage01,
      title: "Computer Science",
      description:
        "Master the latest tools and technologies to build modern web applications.",
      url: "/search?categoryId=6055a4ce-ce17-46de-a3e8-055cd3a15d5a",
    },
    {
      id: "3441c61b-dd43-4c77-a702-eb96d6cfe918",
      imageSrc: CategoryImage02,
      title: "Accounting",
      description:
        "Gain the skills to analyze, visualize, and make sense of accounting.",
      url: "/search?categoryId=3441c61b-dd43-4c77-a702-eb96d6cfe918",
    },
    {
      id: "efced5dd-8b86-4300-bfc9-83c23437b475",
      imageSrc: CategoryImage03,
      title: "Engineering",
      description:
        "Learn how to discover effective build strategies and buildings.",
      url: "/search?categoryId=efced5dd-8b86-4300-bfc9-83c23437b475",
    },
    {
      id: "dc8aa9e7-068e-4758-928e-8a48f50d9bbd",
      imageSrc: CategoryImage04,
      title: "Music",
      description:
        "Explore the principles of music and enhance your creative skills.",
      url: "/search?categoryId=dc8aa9e7-068e-4758-928e-8a48f50d9bbd",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-xl font-semibold md:text-2xl mb-4">
              Explore Our Top Categories
            </h2>
            <p className="text-xl text-gray-400">
              Discover a variety of courses that cater to your learning needs
              and career goals.
            </p>
          </div>

          {/* Categories */}
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                imageSrc={category.imageSrc}
                title={category.title}
                description={category.description}
                url={category.url}
                data-aos-delay={index * 200} // Stagger animation delay
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
