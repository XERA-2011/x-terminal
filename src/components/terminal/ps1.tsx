"use client";

import { terminalConfig } from "@/terminal.config";

export const Ps1 = () => {
    return (
        <div className="flex-shrink-0">
            <span className="text-terminal-purple">
                {terminalConfig.ps1.username}
            </span>
            <span className="text-terminal-gray">@</span>
            <a
                href={terminalConfig.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-cyan no-underline hover:underline"
            >
                {terminalConfig.ps1.hostname}
            </a>
            <span className="text-terminal-gray">:$ ~ </span>
        </div>
    );
};

export default Ps1;
