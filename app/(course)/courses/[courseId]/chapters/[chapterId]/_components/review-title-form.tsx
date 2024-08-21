"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ReviewTitleFormProps {
  initialData: {
    title: string;
  };
  setReviewTitle: React.Dispatch<React.SetStateAction<string>>;
}

const formSchema = z.object({
  title: z.string().min(1),
});

export const ReviewTitleForm = ({
  initialData,
  setReviewTitle,
}: ReviewTitleFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  return (
    <div className="bg-slate-100 rounded-md p-4">
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    onChange={(e) => {
                      if (!isSubmitting || isValid) {
                        setReviewTitle(e.target.value);
                      }
                    }}
                    disabled={isSubmitting}
                    placeholder="e.g. 'Nice chapter duration'"
                  />
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
