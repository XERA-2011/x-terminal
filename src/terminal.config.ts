// Terminal configuration
// Customize this file with your personal information

export const terminalConfig = {
    // Personal information
    name: "XERA-2011",
    email: "1138006034@qq.com",

    // Terminal PS1 prompt settings
    ps1: {
        username: "visitor",
        hostname: "x-terminal",
    },

    // Social links
    social: {
        github: "XERA-2011",
    },

    repo: "https://github.com/XERA-2011/x-terminal",

    // Site title
    title: "x-terminal",
} as const;

export type TerminalConfig = typeof terminalConfig;
