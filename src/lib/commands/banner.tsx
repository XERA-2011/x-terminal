import React from "react";
import { terminalConfig, isAliyun } from "@/terminal.config";
import { TypingEffect } from "@/components/terminal/typing-effect";

export const banner = (quoteLines?: string[]): string | React.ReactNode => {
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
        { label: "Author", value: `<a class="hover:underline" href="https://github.com/${terminalConfig.github}" target="_blank">XERA-2011</a>` },
        ...(!isAliyun ? [{ label: "Sites", value: terminalConfig.sites.map((site) => `<a class="hover:underline" href="${site.url}" target="_blank">${site.name}</a>`).join(" ") }] : []),
        ...(!isAliyun ? [{ label: "Social", value: terminalConfig.social.map((social) => `<a class="hover:underline" href="${social.url}" target="_blank">${social.name}</a>`).join(" ") }] : []),
        { label: "About", value: `<span  class="text-terminal-orange cursor-pointer hover:underline" onclick="window.executeCommand('about')">me</span>` },
    ];

    const helpText = `Type or click '<span class="text-terminal-cyan cursor-pointer hover:underline" onclick="window.executeCommand('help')">help</span>' to see the list of available commands.`;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-start text-left max-w-full mt-2 mb-1">
                <div className="ascii-art whitespace-pre text-terminal-foreground font-bold select-none text-[12px] sm:text-[16px] shrink-0" style={{ lineHeight: "1.0" }}>
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
                        {quoteLines ? <TypingEffect lines={quoteLines} speed={80} wait={5000} /> : null}
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: helpText }} />
        </div>
    );
};
