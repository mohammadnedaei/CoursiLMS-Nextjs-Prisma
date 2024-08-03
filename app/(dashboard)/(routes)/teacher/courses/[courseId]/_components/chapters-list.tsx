"use client"

import {Chapter} from "@prisma/client";

interface ChaptersListProps {
    items: Chapter[];
    onReorder: (updateData: { id: string; position: number }[]) => void;
    onEdit: (id: string) => void;
}

export const ChaptersList = ({items, onReorder, onEdit}: ChaptersListProps) => {
    return (
        <div>
            Chapters List
        </div>
    )
}
