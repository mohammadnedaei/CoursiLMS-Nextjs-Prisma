"use client";

import { IconBadge } from "@/components/icon-badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquareMore, Star } from "lucide-react";
import { ReviewModal } from "./review-modal";
import { Course, Review } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

interface CourseReviewProps {
  showSubmit: boolean;
  course: Course & { reviews: Review[] };
  userId: string;
}

export const CourseReview = ({
  showSubmit,
  course,
  userId,
}: CourseReviewProps) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewRating, setReviewRating] = useState(3);
  const [reviewComment, setReviewComment] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    try {
      await axios.post(`/api/courses/${course.id}/review`, {
        title: reviewTitle,
        comment: reviewComment,
        rating: reviewRating,
        userId,
        courseId: course.id,
      });
      toast.success("Review submitted");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex-row flex items-center gap-x-2">
            <IconBadge icon={MessageSquareMore} />
            <h2 className="text-xl">Reviews</h2>
          </div>
          {showSubmit && (
            <ReviewModal
              course={course}
              userId={userId}
              onConfirm={onSubmit}
              reviewTitle={reviewTitle}
              reviewComment={reviewComment}
              reviewRating={reviewRating}
              setReviewTitle={setReviewTitle}
              setReviewComment={setReviewComment}
              setReviewRating={setReviewRating}
            >
              <Button
                onClick={() => {
                  setReviewComment("");
                  setReviewTitle("");
                  setReviewRating(3);
                }}
              >
                New review
              </Button>
            </ReviewModal>
          )}
        </div>
        <Separator />

        <div className="space-y-4 mt-4">
          {course.reviews.map((review) => (
            <div key={review.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-start">
                <Image
                  src={review.authorImageUrl}
                  alt={review.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{review.author}</h4>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">
                      {formatDistanceToNow(new Date(review.createdAt))} ago
                    </span>
                  </div>
                  <h5 className="text-lg font-medium">{review.title}</h5>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
