import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/home", "/api/uploadthing", "/api/webhook"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
