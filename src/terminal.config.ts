// Terminal configuration
// Customize this file with your personal information


export const terminalConfig = {
    // Personal information
    name: "XERA-2011",
    email: "1138006034@qq.com",
    github: "XERA-2011",
    gitee: "XERA-2011",
    sites: [
        {
            name: "blog",
            url: "https://xera-2011.github.io"
        }, {
            name: "x-texas-holdem",
            url: "https://x-texas-holdem.pages.dev"
        }
    ],
    // Terminal PS1 prompt settings
    ps1: {
        username: "you",
        hostname: "x-terminal",
    },

    // Social links
    social: [
        {
            name: "𝕏 (Twitter)",
            url: "https://x.com/XERA_2011"
        },
        // {
        //     name: "GitHub",
        //     url: "https://github.com/XERA-2011"
        // }
    ],

    repo: {
        github: "https://github.com/XERA-2011/x-terminal",
        gitee: "https://gitee.com/XERA-2011/x-terminal",
    },

    // Site title
    title: "x-terminal",
} as const;

export const isAliyun = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "aliyun";

export type TerminalConfig = typeof terminalConfig;
