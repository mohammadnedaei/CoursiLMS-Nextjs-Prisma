import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { VideoPlayer } from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/video-player";
import { CourseEnrollButton } from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import { CourseProgressButton } from "@/app/(course)/courses/[courseId]/chapters/[chapterId]/_components/course-progress-button";
import { CourseReview } from "./_components/course-review";
import { db } from "@/lib/db";

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) return redirect("/");

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  // Filter attachments by type
  const docsAttachments = attachments.filter(
    (attachment) => attachment.type === "DOCS"
  );
  const testAttachments = attachments.filter(
    (attachment) => attachment.type === "TEST"
  );

  const courseData = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      reviews: true,
    },
  });
  const courseReviewed = await db.review.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: params.courseId,
      },
    },
  });
  const review = await db.review.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner label="You already completed this chapter." variant="success" />
      )}
      {isLocked && (
        <Banner
          label="You need to purchase this course to watch this chapter."
          variant="warning"
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
            {purchase ? (
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.id}
                isCompleted={!!userProgress?.isCompleted}
              />
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price!}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter.description!} />
          </div>

          {!!docsAttachments.length && (
            <>
              <Separator />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                {docsAttachments.map((attachment) => (
                  <a
                    key={attachment.id}
                    href={attachment.url}
                    target="_blank"
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1 ml-2">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}

          {!!testAttachments.length && (
            <>
              <Separator />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Tests</h3>
                {testAttachments.map((attachment) => (
                  <a
                    key={attachment.id}
                    href={attachment.url}
                    target="_blank"
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1 ml-2">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
        {review && (
          <>
            <Separator />
            <div className="mt-10">
              <CourseReview
                showSubmit={!!purchase && !courseReviewed}
                course={courseData}
                userId={userId}
                review={review}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterIdPage;
