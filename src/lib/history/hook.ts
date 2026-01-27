"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { History } from "./interface";

export const useHistory = (defaultValue: History[] = []) => {
    const [history, setHistoryState] = useState<History[]>(defaultValue);
    const [command, setCommand] = useState<string>("");
    const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

    // Use ref to avoid dependency on command in setHistory
    const commandRef = useRef(command);
    useEffect(() => {
        commandRef.current = command;
    }, [command]);

    const setHistory = useCallback((output: string | React.ReactNode) => {
        setHistoryState((prev) => [
            ...prev,
            {
                id: prev.length,
                date: new Date(),
                command: commandRef.current,
                output,
            },
        ]);
    }, []);

    const clearHistory = useCallback(() => {
        setHistoryState([]);
    }, []);

    return {
        history,
        command,
        lastCommandIndex,
        setHistory,
        setCommand,
        setLastCommandIndex,
        clearHistory,
    };
};
