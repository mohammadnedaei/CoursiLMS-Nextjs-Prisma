import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
export const metadata = {
  title: "Coursi - Learn Anytime, Anywhere with Expert-Led Online Courses",
  description:
    "Coursi offers a vast selection of online courses designed by industry experts to help you master new skills, advance your career, or explore new hobbies. Whether you’re interested in technology, business, art, or personal development, Coursi provides high-quality content tailored to your learning goals. Join a global community of learners and start your educational journey today—anytime, anywhere, on any device.",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </head>
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
