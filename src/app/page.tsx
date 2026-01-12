import { Terminal } from "@/components/terminal";
import { GithubIcon } from "@/components/icons/github-icon";
import { terminalConfig } from "@/terminal.config";

export default function Home() {
    return (
        <div className="relative h-screen p-8 font-mono bg-terminal-background text-terminal-foreground">
            {/* GitHub Link */}
            <a
                href={terminalConfig.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-8 right-8 text-terminal-foreground z-50"
                aria-label="GitHub Repository"
            >
                <GithubIcon className="w-8 h-8" />
            </a>

            <Terminal />
        </div>
    );
}
