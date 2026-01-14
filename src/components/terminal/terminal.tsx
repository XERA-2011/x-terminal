"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { useHistory } from "@/lib/history";
import { History } from "./history";
import { Input } from "./input";
import { banner } from "@/lib/commands";
import { shell } from "@/lib/shell";

// ...

export const Terminal: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const {
        history,
        command,
        lastCommandIndex,
        setCommand,
        setHistory,
        clearHistory,
        setLastCommandIndex,
    } = useHistory([]);

    const init = useCallback(() => setHistory(banner()), [setHistory]);

    useEffect(() => {
        init();
    }, [init]);

    // Expose executeCommand to window for clickable commands in HTML output
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).executeCommand = async (cmd: string) => {
            setCommand(cmd);
            await shell(cmd, setHistory, clearHistory, setCommand);
        };
        return () => {
            // cleanup if needed
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (window as any).executeCommand;
        };
    }, [setHistory, clearHistory, setCommand]);

    // ...

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView();
            inputRef.current.focus({ preventScroll: true });
        }
    }, [history]);

    const handleContainerClick = () => {
        const selection = window.getSelection();
        if (!selection || selection.toString().length === 0) {
            inputRef.current?.focus();
        }
    };

    return (
        <div
            className="terminal-container overflow-hidden h-full cursor-text border-1 border-[#4F4F4F] rounded-3xl p-4"
            onClick={handleContainerClick}
        >
            <div ref={containerRef} className="overflow-y-auto h-full">
                <History history={history} />

                <Input
                    inputRef={inputRef}
                    containerRef={containerRef}
                    command={command}
                    history={history}
                    lastCommandIndex={lastCommandIndex}
                    setCommand={setCommand}
                    setHistory={setHistory}
                    setLastCommandIndex={setLastCommandIndex}
                    clearHistory={clearHistory}
                />
            </div>
        </div>
    );
};

export default Terminal;
