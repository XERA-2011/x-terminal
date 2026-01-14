"use client";

import React from "react";
import { commandExists } from "@/lib/command-exists";
import { shell } from "@/lib/shell";
import { handleTabCompletion } from "@/lib/tab-completion";
import { Ps1 } from "./ps1";
import type { History } from "@/lib/history";

interface InputProps {
    inputRef: React.RefObject<HTMLInputElement | null>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    command: string;
    history: History[];
    lastCommandIndex: number;
    setCommand: React.Dispatch<React.SetStateAction<string>>;
    setHistory: (value: string) => void;
    setLastCommandIndex: React.Dispatch<React.SetStateAction<number>>;
    clearHistory: () => void;
}

export const Input: React.FC<InputProps> = ({
    inputRef,
    containerRef,
    command,
    history,
    lastCommandIndex,
    setCommand,
    setHistory,
    setLastCommandIndex,
    clearHistory,
}) => {


    const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        const commands: string[] = history
            .map(({ command }) => command)
            .filter((command: string) => command);

        if (event.key === "c" && event.ctrlKey) {
            event.preventDefault();
            setCommand("");
            setHistory("");
            setLastCommandIndex(0);
        }

        if (event.key === "l" && event.ctrlKey) {
            event.preventDefault();
            clearHistory();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            handleTabCompletion(command, setCommand);
        }

        if (event.key === "Enter" || event.code === "13") {
            event.preventDefault();
            setLastCommandIndex(0);
            await shell(command, setHistory, clearHistory, setCommand);
            if (containerRef.current) {
                containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
            }
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (!commands.length) {
                return;
            }
            const index: number = lastCommandIndex + 1;
            if (index <= commands.length) {
                setLastCommandIndex(index);
                setCommand(commands[commands.length - index]);
            }
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (!commands.length) {
                return;
            }
            const index: number = lastCommandIndex - 1;
            if (index > 0) {
                setLastCommandIndex(index);
                setCommand(commands[commands.length - index]);
            } else {
                setLastCommandIndex(0);
                setCommand("");
            }
        }
    };

    const onChange = ({
        target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(value);
    };

    return (
        <div className="flex flex-row space-x-2" onClick={(e) => e.stopPropagation()}>
            <label htmlFor="prompt" className="flex-shrink-0">
                <Ps1 />
            </label>

            <input
                ref={inputRef}
                id="prompt"
                type="text"
                className={`bg-transparent focus:outline-none flex-grow font-mono ${commandExists(command) || command === ""
                    ? "text-terminal-cyan"
                    : "text-terminal-red"
                    }`}
                value={command}
                onChange={onChange}
                autoFocus
                onKeyDown={onSubmit}
                autoComplete="off"
                spellCheck="false"
            />
        </div>
    );
};

export default Input;
