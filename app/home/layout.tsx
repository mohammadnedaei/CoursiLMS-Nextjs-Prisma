"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/app/home/_components/page-illustration";
import Footer from "@/app/home/_components/footer";
import Header from "@/app/home/_components/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <main className="grow">
            <PageIllustration />

            {children}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
