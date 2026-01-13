// List of commands that do not require API calls

import { terminalConfig } from "@/terminal.config";
import { projects } from "./api-commands";

// List of all available commands
const CATEGORIES = {
    "Info & Contact": ["about", "email", "github", "projects", "readme", "whoami"],
    "System & Cmds": ["banner", "cd", "clear", "date", "help", "ls"],
    "Web & Tools": ["bing", "google", "quote", "reddit", "weather"],
    "Editors & Fun": ["echo", "emacs", "nvim", "vi", "vim"]
} as const;

export const COMMANDS = Object.values(CATEGORIES).flat().sort();

// Help
export const help = async (): Promise<string> => {
    let c = "";

    for (const [category, commands] of Object.entries(CATEGORIES)) {
        c += `${category}:\n`;
        for (let i = 0; i < commands.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                c += "\n";
            }
            const cmd = commands[i];
            const spaces = " ".repeat(12 - cmd.length);
            c += `  <span class="cursor-pointer hover:underline" onclick="window.executeCommand('${cmd}')">${cmd}</span>${spaces}`;
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
    return `Hi, I am ${terminalConfig.name}. 
Welcome to my website!`;
};


// Contact
export const email = async (): Promise<string> => {
    window.open(`mailto:${terminalConfig.email}`);
    return `Opening mailto:${terminalConfig.email}...`;
};

export const github = async (): Promise<string> => {
    window.open(`https://github.com/${terminalConfig.social.github}`);
    return "Opening github...";
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
export const banner = (): string => {
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
        { label: "Github", value: `<a class="text-terminal-blue hover:underline" href="${terminalConfig.repo}" target="_blank">x-terminal</a>` },
        { label: "Sites", value: `<a class="text-terminal-blue hover:underline" href="https://xera-2011.github.io" target="_blank">XERA-2011</a> <a class="text-terminal-blue hover:underline" href="https://x-texas-holdem.pages.dev" target="_blank">x-texas-holdem</a>` },
        { label: "Social", value: `<a class="text-terminal-blue hover:underline" href="https://x.com/XERA_2011" target="_blank">𝕏 (Twitter)</a>` },
    ];

    let output = `<div class="mt-2 mb-1 flex flex-row gap-4 items-start text-left">`;

    // Left: Art
    // Scaling Y to fix the aspect ratio, using margin-bottom to compensate for layout overlap (since transform doesn't    // Left: Art
    output += `<div class="ascii-art font-mono whitespace-pre text-terminal-foreground font-bold select-none text-[10px] sm:text-[16px]" style="line-height: 1.0;">`;
    output += art.join("\n");
    output += `</div>`;

    // Right: Info (Grid Layout)
    output += `<div class="grid grid-cols-[auto_1fr] gap-x-4 text-left w-full sm:w-auto">`;
    infoData.forEach(item => {
        if (item.spacer) {
            output += `<div class="col-span-2 h-2"></div>`;
        } else {
            const label = item.label ? `${item.label}:` : '';
            if (item.label === '-------') {
                output += `<div>-------</div><div>----------</div>`;
            } else {
                output += `<div class="font-bold">${label}</div>`;
                output += `<div class="break-words">${item.value}</div>`;
            }
        }
    });
    output += `</div>`;

    output += `</div>`;

    output += `Type or click '<span class="cursor-pointer hover:underline" onclick="window.executeCommand('help')">help</span>' to see the list of available commands.`;

    return output;
};
