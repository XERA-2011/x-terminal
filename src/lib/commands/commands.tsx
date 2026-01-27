// List of commands that do not require API calls

import { terminalConfig, isAliyun } from "@/terminal.config";
import { projects } from "./api-commands";
import { TypingEffect } from "@/components/terminal/typing-effect";
import { MOVIE_QUOTES } from "@/lib/data/quotes";
import React from 'react';

// List of all available commands
const CATEGORIES = {
    "Info & Contact": ["about", "email", "gitee", "github", "projects", "readme", "whoami"],
    "System & Cmds": ["banner", "cd", "clear", "date", "help", "ls"],
    "Web & Tools": ["bing", "google", "quote", "reddit", "weather", ...(isAliyun ? ["aliyun"] : [])],
    "Editors & Fun": ["echo", "emacs", "nvim", "vi", "vim"]
} as const;

export const COMMANDS = Object.values(CATEGORIES).flat().sort();

// Ailyun Projects
export const aliyun = async (): Promise<string> => {
    if (!isAliyun) return "Command not available.";
    const projects = [
        { name: "x-analytics", url: "/analytics/" },
        { name: "x-texas-holdem", url: "/texas-holdem/" },
    ];

    return projects
        .map(
            (repo) =>
                `${repo.name} - <a href="${repo.url}" target="_blank">${repo.url}</a>`
        )
        .join("\n");
};

// Help
export const help = async (): Promise<string> => {
    let c = "";

    for (const [category, commands] of Object.entries(CATEGORIES)) {
        c += `<span class="text-terminal-purple">${category}:</span>\n`;
        for (let i = 0; i < commands.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                c += "\n";
            }
            const cmd = commands[i];
            const spaces = " ".repeat(12 - cmd.length);
            c += `  <span class="text-terminal-cyan cursor-pointer hover:underline" onclick="window.executeCommand('${cmd}')">${cmd}</span>${spaces}`;
        }
        c += "\n\n";
    }

    return `Welcome! Here are all the available commands:
\n${c}
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// Redirection


// About
export const about = async (): Promise<string> => {
    return `<span class="text-terminal-gray">
Hi, I am ${terminalConfig.name}
Full-Stack Engineer
WeChat: XERA_2011
Email: ${terminalConfig.email}

Welcome to my terminal website!

</span>`;
};


// Contact
export const email = async (): Promise<string> => {
    window.open(`mailto:${terminalConfig.email}`);
    return `Opening mailto:${terminalConfig.email}...`;
};

export const github = async (): Promise<string> => {
    window.open(`https://github.com/${terminalConfig.github}`);
    return "Opening github...";
};

export const gitee = async (): Promise<string> => {
    window.open(`https://gitee.com/${terminalConfig.gitee}`);
    return "Opening gitee...";
};

// Search
export const google = async (args: string[]): Promise<string> => {
    window.open(`https://google.com/search?q=${args.join(" ")}`);
    return `Searching google for ${args.join(" ")}...`;
};

export const bing = async (args: string[]): Promise<string> => {
    window.open(`https://bing.com/search?q=${args.join(" ")}`);
    return `Wow, really? You are using bing for ${args.join(" ")}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
    window.open(`https://www.reddit.com/search/?q=${args.join(" ")}`);
    return `Searching reddit for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
    return args.join(" ");
};

export const whoami = async (): Promise<string> => {
    return `${terminalConfig.ps1.username}`;
};

export const ls = async (): Promise<string> => {
    return await projects();
};

export const cd = async (): Promise<string> => {
    return `unfortunately, i cannot afford more directories.`;
};

export const date = async (): Promise<string> => {
    return new Date().toString();
};

export const vi = async (): Promise<string> => {
    return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (): Promise<string> => {
    return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (): Promise<string> => {
    return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (): Promise<string> => {
    return `you know what? just use vscode.`;
};



// Banner
const randomQuote = MOVIE_QUOTES[Math.floor(Math.random() * MOVIE_QUOTES.length)];
const sessionQuoteLines = [randomQuote.english, randomQuote.chinese];

// Banner
export const banner = (): string | React.ReactNode => {
    // ... art definition
    const art = [
        "██╗  ██╗",
        "╚██╗██╔╝",
        " ╚███╔╝ ",
        " ██╔██╗ ",
        "██╔╝ ██╗",
        "╚═╝  ╚═╝",
    ];

    interface InfoItem {
        label: string;
        value: string;
        spacer?: boolean;
    }

    const infoData: InfoItem[] = [
        { label: "Author", value: `<a class="hover:underline" href="${isAliyun ? `https://gitee.com/${terminalConfig.gitee}` : `https://github.com/${terminalConfig.github}`}" target="_blank">XERA-2011</a>` },
        ...(!isAliyun ? [{ label: "Sites", value: terminalConfig.sites.map((site) => `<a class="hover:underline" href="${site.url}" target="_blank">${site.name}</a>`).join(" ") }] : []),
        ...(!isAliyun ? [{ label: "Social", value: terminalConfig.social.map((social) => `<a class="hover:underline" href="${social.url}" target="_blank">${social.name}</a>`).join(" ") }] : []),
        { label: "About", value: `<span  class="text-terminal-orange cursor-pointer hover:underline" onclick="window.executeCommand('about')">me</span>` },
    ];

    // JSX Result
    const helpText = `Type or click '<span class="text-terminal-cyan cursor-pointer hover:underline" onclick="window.executeCommand('help')">help</span>' to see the list of available commands.`;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-start text-left max-w-full mt-2 mb-1">
                <div className="ascii-art font-mono whitespace-pre text-terminal-foreground font-bold select-none text-[10px] sm:text-[16px] shrink-0" style={{ lineHeight: "1.0" }}>
                    {art.join("\n")}
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 text-left">
                    {infoData.map((item, i) => (
                        <React.Fragment key={i}>
                            {item.spacer ? (
                                <div className="col-span-2 h-2"></div>
                            ) : item.label === '-------' ? (
                                <><div>-------</div><div>----------</div></>
                            ) : (
                                <>
                                    <div className="font-bold">{item.label ? `${item.label}:` : ''}</div>
                                    <div className="break-words" dangerouslySetInnerHTML={{ __html: item.value }}></div>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                    {/* Typing Effect Row */}
                    <div className="font-bold">Quote:</div>
                    <div>
                        <TypingEffect lines={sessionQuoteLines} speed={80} wait={5000} />
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: helpText }} />
        </div>
    );
};
