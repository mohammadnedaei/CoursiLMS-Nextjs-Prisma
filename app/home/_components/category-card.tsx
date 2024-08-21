"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const CategoryCard = ({ imageSrc, title, description, url }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col h-full p-6 bg-gray-800 rounded-lg cursor-pointer transform transition-transform duration-200 hover:bg-slate-800"
      data-aos="fade-up"
    >
      <div className="relative mb-4">
        <Image
          className="rounded-lg"
          src={imageSrc}
          width={250}
          height={160}
          alt={title}
        />
      </div>
      <h3 className="text-lg font-medium text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
