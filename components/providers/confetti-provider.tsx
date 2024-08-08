"use client"

import ReactConfetti from "react-confetti";

import {useConfettiStore} from "@/hooks/use-confetti-store";

export const ConfettiProvider = () => {
    const confetti = useConfettiStore();

    if (!confetti.isOpen) return null;

    return (
        <ReactConfetti
            className="pointer-events-none z-[100]"
            numberOfPieces={40}
            opacity={0.7}
            gravity={0.07}
            recycle={false}
            onConfettiComplete={() => {
                confetti.onClose();
            }}
        />
    )
}
