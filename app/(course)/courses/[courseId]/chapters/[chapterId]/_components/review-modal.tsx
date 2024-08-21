"use client";

import { IconBadge } from "@/components/icon-badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Course } from "@prisma/client";
import { LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { ReviewTitleForm } from "./review-title-form";
import { ReviewCommentForm } from "./review-comment-form";
import { ReviewRatingForm } from "./review-rating-form";

interface ReviewModalProps {
  children: React.ReactNode;
  course: Course;
  userId: string;
  onConfirm: () => void;
  reviewTitle: string;
  reviewComment: string;
  reviewRating: number;
  setReviewTitle: React.Dispatch<React.SetStateAction<string>>;
  setReviewComment: React.Dispatch<React.SetStateAction<string>>;
  setReviewRating: React.Dispatch<React.SetStateAction<number>>;
}

export const ReviewModal = ({
  children,
  course,
  userId,
  onConfirm,
  reviewTitle,
  reviewComment,
  reviewRating,
  setReviewTitle,
  setReviewComment,
  setReviewRating,
}: ReviewModalProps) => {
  const requiredFields = [reviewTitle, reviewRating, reviewComment];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Submit new review?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
          <div className="flex flex-col gap-y-2">
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h6 className="text-md font-medium">Title</h6>
            </div>
            <ReviewTitleForm
              initialData={course.review}
              setReviewTitle={setReviewTitle}
            />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h6 className="text-md font-medium">Rating</h6>
            </div>
            <ReviewRatingForm
              initialData={course.review}
              setReviewRating={setReviewRating}
            />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h6 className="text-md font-medium">Comment</h6>
            </div>
            <ReviewCommentForm
              initialData={course.review}
              setReviewComment={setReviewComment}
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={!isComplete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
