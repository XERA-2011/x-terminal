"use client";

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    lines?: string[];
    wait?: number;
    speed?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
    lines = ["Hello World!", "Welcome to XERA-2011 Terminal"],
    wait = 1000,
    speed = 50
}) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (!lines || lines.length === 0) return;

        // Waiting logic after typing a full line or after deleting
        if (subIndex === lines[lineIndex].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, wait); // Wait before deleting
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setLineIndex((prev) => (prev + 1) % lines.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 25 : subIndex === lines[lineIndex].length ? 150 : (Math.random() * (speed - 10) + 10), 20)); // Random typing speed

        return () => clearTimeout(timeout);
    }, [subIndex, lineIndex, reverse, lines, speed, wait]);

    return (
        <span className="font-bold text-terminal-orange">
            {lines[lineIndex].substring(0, subIndex)}
        </span>
    );
};
