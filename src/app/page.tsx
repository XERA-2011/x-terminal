import { Terminal } from "@/components/terminal";
import { GithubIcon } from "@/components/icons/github-icon";
import { terminalConfig } from "@/terminal.config";
import { MOVIE_QUOTES } from "@/lib/data/quotes";

// Select quote at build time — keeps quotes out of client JS bundle and satisfies react-hooks/purity
const randomQuote = MOVIE_QUOTES[Math.floor(Math.random() * MOVIE_QUOTES.length)];
const quoteLines = [randomQuote.english, randomQuote.chinese];

export default function Home() {
    return (
        <div className="relative h-screen p-4 sm:p-8 font-mono bg-[#181818] text-terminal-foreground">
            {/* Repo Link */}
            <a
                href={terminalConfig.repo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-7 right-10 sm:top-11 sm:right-14 text-terminal-foreground z-50"
                aria-label="GitHub Repository"
            >
                <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>

            <Terminal quoteLines={quoteLines} />
        </div>
    );
}
