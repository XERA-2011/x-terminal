// API-based commands

import { getProjects, getQuote, getReadme, getWeather } from "../api";

export const projects = async (): Promise<string> => {
    try {
        const projectList = await getProjects();
        return projectList
            .map(
                (repo: { name: string; html_url: string }) =>
                    `${repo.name} - <a class="text-terminal-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`
            )
            .join("\n");
    } catch {
        return "Error fetching projects. Please try again later.";
    }
};

export const quote = async (): Promise<string> => {
    const data = await getQuote();
    return data.quote;
};

export const readme = async (): Promise<string> => {
    try {
        const readmeContent = await getReadme();
        return `GitHub README:\n\n${readmeContent}`;
    } catch {
        return "Error fetching README. Please try again later.";
    }
};

export const weather = async (args: string[]): Promise<string> => {
    const city = args.join("+");
    if (!city) {
        return "Usage: weather [city]. Example: weather casablanca";
    }
    const weatherData = await getWeather(city);
    return weatherData;
};
