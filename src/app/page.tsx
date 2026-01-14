import { Terminal } from "@/components/terminal";
import { GithubIcon } from "@/components/icons/github-icon";
import { terminalConfig } from "@/terminal.config";

export default function Home() {
    return (
        <div className="relative h-screen p-4 sm:p-8 font-mono bg-[#181818] text-terminal-foreground">
            {/* GitHub Link */}
            <a
                href={terminalConfig.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-7 right-7 sm:top-11 sm:right-11 text-terminal-foreground z-50"
                aria-label="GitHub Repository"
            >
                <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>

            <Terminal />
        </div>
    );
}
