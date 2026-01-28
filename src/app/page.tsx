import { Terminal } from "@/components/terminal";
import { GithubIcon } from "@/components/icons/github-icon";
// import { GiteeIcon } from "@/components/icons/gitee-icon";
import { terminalConfig, isAliyun } from "@/terminal.config";

export default function Home() {
    return (
        <div className="relative h-screen p-4 sm:p-8 font-mono bg-[#181818] text-terminal-foreground">
            {/* Repo Link */}
            <a
                href={isAliyun ? terminalConfig.repo.gitee : terminalConfig.repo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-7 right-7 sm:top-11 sm:right-11 text-terminal-foreground z-50"
                aria-label={isAliyun ? "Gitee Repository" : "GitHub Repository"}
            >
                {isAliyun ? (
                    null
                ) : (
                    <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                )}
            </a>

            <Terminal />
        </div>
    );
}
