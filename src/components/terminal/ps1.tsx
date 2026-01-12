"use client";

import { terminalConfig } from "@/terminal.config";

export const Ps1 = () => {
    return (
        <div className="flex-shrink-0">
            <span className="text-terminal-yellow">
                {terminalConfig.ps1.username}
            </span>
            <span className="text-terminal-gray">@</span>
            <span className="text-terminal-green">
                {terminalConfig.ps1.hostname}
            </span>
            <span className="text-terminal-gray">:$ ~ </span>
        </div>
    );
};

export default Ps1;
