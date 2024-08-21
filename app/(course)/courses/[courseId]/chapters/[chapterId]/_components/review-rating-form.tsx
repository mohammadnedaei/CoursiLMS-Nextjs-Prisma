"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Star } from "lucide-react"; // Importing the star icon

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";

interface ReviewRatingFormProps {
  initialData: {
    rating: number;
  };
  setReviewRating: React.Dispatch<React.SetStateAction<number>>;
}

const formSchema = z.object({
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
});

export const ReviewRatingForm = ({
  initialData,
  setReviewRating,
}: ReviewRatingFormProps) => {
  const [currentRate, setCurrentRate] = useState(3);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  return (
    <div className="bg-slate-100 rounded-md p-4">
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            name="rating"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      <Star className="text-yellow-500" />
                      <div className="text-md font-medium flex flex-row items-center">
                        <p> {currentRate} </p>
                        <p> &nbsp;/&nbsp; </p>
                        <p> 5 </p>
                      </div>
                    </div>

                    <Slider
                      value={[currentRate]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => {
                        setReviewRating(value[0]);
                        setCurrentRate(value[0]);
                        field.onChange(value[0]);
                      }}
                      className="w-full"
                      thumbClassName="bg-yellow-500" // Customizing the bullet
                      trackClassName="bg-gray-300" // Customizing the track background
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
