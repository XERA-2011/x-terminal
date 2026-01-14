// Terminal configuration
// Customize this file with your personal information


export const terminalConfig = {
    // Personal information
    name: "XERA-2011",
    email: "1138006034@qq.com",
    github: "XERA-2011",

    // Terminal PS1 prompt settings
    ps1: {
        username: "you",
        hostname: "x-terminal",
    },

    // Social links
    social: {
        x: "https://x.com/XERA_2011",
    },

    repo: "https://github.com/XERA-2011/x-terminal",

    // Site title
    title: "x-terminal",
} as const;

export type TerminalConfig = typeof terminalConfig;
