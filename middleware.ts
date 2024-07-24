import {authMiddleware} from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/home"]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
