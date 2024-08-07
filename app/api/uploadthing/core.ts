import {createUploadthing, type FileRouter} from "uploadthing/next";
import {UploadThingError} from "uploadthing/server";
import {auth} from "@clerk/nextjs";

const f = createUploadthing();

const handleAuth = () => {
    const {userId} = auth()
    if (!userId) throw new Error("Unauthorized");
    return {userId}
}


export const ourFileRouter = {
    courseImage: f({image: {maxFileSize: "4MB", maxFileCount: 1}})
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
        }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
        }),
    courseVideo: f({video: {maxFileCount: 1, maxFileSize: "512GB"}})
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
