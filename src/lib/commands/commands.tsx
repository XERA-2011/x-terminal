// List of commands that do not require API calls

import { terminalConfig } from "@/terminal.config";
import { projects } from "./api-commands";
import { CATEGORIES } from "./constants";
export { CATEGORIES, COMMANDS } from "./constants";
export { banner } from "./banner";

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




