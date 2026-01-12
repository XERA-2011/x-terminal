// List of commands that do not require API calls

import { terminalConfig } from "@/terminal.config";

// List of all available commands
export const COMMANDS = [
    "about",
    "banner",
    "bing",
    "cd",
    "date",
    "echo",
    "email",
    "emacs",
    "github",
    "google",
    "help",
    "ls",
    "nvim",
    "projects",
    "quote",
    "readme",
    "reddit",
    "vi",
    "vim",
    "weather",
    "whoami",
] as const;

// Help
// Help
export const help = async (args: string[]): Promise<string> => {
    let c = "";
    for (let i = 0; i < COMMANDS.length; i++) {
        if (i % 6 === 0 && i !== 0) {
            c += "\n";
        }
        c += COMMANDS[i].padEnd(12, " ");
    }
    return `Welcome! Here are all the available commands:
\n${c}\n
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
    window.open(`https://github.com/${terminalConfig.social.github}/`);
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
    return `a
bunch
of
fake
directories`;
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
██╗  ██╗      ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚██╗██╔╝      ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
 ╚███╔╝ █████╗   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
 ██╔██╗ ╚════╝   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
██╔╝ ██╗         ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
╚═╝  ╚═╝         ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝

Type 'help' to see the list of available commands.
`;
};


