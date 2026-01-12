// List of commands that do not require API calls

import { terminalConfig } from "@/terminal.config";
import { projects } from "./api-commands";

// List of all available commands
const CATEGORIES = {
    "Info & Contact": ["about", "email", "github", "projects", "readme", "whoami"],
    "System & Cmds": ["banner", "cd", "date", "help", "ls"],
    "Web & Tools": ["bing", "google", "quote", "reddit", "weather"],
    "Editors & Fun": ["echo", "emacs", "nvim", "vi", "vim"]
} as const;

export const COMMANDS = Object.values(CATEGORIES).flat().sort();

// Help
export const help = async (args: string[]): Promise<string> => {
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
export const about = async (args: string[]): Promise<string> => {
    return `Hi, I am ${terminalConfig.name}. 
Welcome to my website!`;
};


// Contact
export const email = async (args: string[]): Promise<string> => {
    window.open(`mailto:${terminalConfig.email}`);
    return `Opening mailto:${terminalConfig.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
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

export const whoami = async (args: string[]): Promise<string> => {
    return `${terminalConfig.ps1.username}`;
};

export const ls = async (args: string[]): Promise<string> => {
    return await projects(args);
};

export const cd = async (args: string[]): Promise<string> => {
    return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
    return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
    return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
    return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
    return `you know what? just use vscode.`;
};



// Banner
export const banner = (args?: string[]): string => {
    return `
<div class="ascii-art">
██╗  ██╗      ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚██╗██╔╝      ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
 ╚███╔╝ █████╗   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
 ██╔██╗ ╚════╝   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
██╔╝ ██╗         ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
╚═╝  ╚═╝         ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
</div>
Type or click '<span class="cursor-pointer hover:underline" onclick="window.executeCommand('help')">help</span>' to see the list of available commands.

My Sites:
<a class="text-terminal-blue hover:underline" href="https://xera-2011.github.io" target="_blank">xera-2011.github.io</a>
<a class="text-terminal-blue hover:underline" href="https://x-texas-holdem.pages.dev" target="_blank">x-texas-holdem.pages.dev</a>
`;
};


