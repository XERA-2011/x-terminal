import { terminalConfig } from "@/terminal.config";

export const getProjects = async () => {
    const response = await fetch(
        `https://api.github.com/users/${terminalConfig.github}/repos`
    );
    return response.json();
};

export const getReadme = async () => {
    // You can set your readme URL in terminal.config.ts
    const readmeUrl = `https://raw.githubusercontent.com/${terminalConfig.github}/${terminalConfig.github}/master/README.md`;
    const response = await fetch(readmeUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch README");
    }
    return response.text();
};

export const getWeather = async (city: string) => {
    try {
        const response = await fetch(`https://wttr.in/${city}?ATm`);
        return response.text();
    } catch (error) {
        return `Error fetching weather: ${error}`;
    }
};

export const getQuote = async () => {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return {
            quote: `"${data.content}" — ${data.author}`,
        };
    } catch {
        return {
            quote: '"The only way to do great work is to love what you do." — Steve Jobs',
        };
    }
};
