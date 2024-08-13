"use client"

import {Button} from "@/components/ui/button";
import {formatPrice} from "@/lib/format";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface CourseEnrollButtonProps {
    price: number;
    courseId: string;
}

export const CourseEnrollButton = ({price, courseId}: CourseEnrollButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true)

            const response = await axios.post(`/api/courses/${courseId}/checkout`)

            window.location.assign(response.data.url);
        } catch {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Button
            onClick={onClick}
            className="w-full md:w-auto"
            size="sm"
            disabled={isLoading}
        >
            Enroll for {formatPrice(price)}
        </Button>
    )
}
