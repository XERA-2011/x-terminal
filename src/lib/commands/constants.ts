export const CATEGORIES = {
    "Info & Contact": ["about", "email", "github", "projects", "readme", "whoami"],
    "System & Cmds": ["banner", "cd", "clear", "date", "help", "ls"],
    "Web & Tools": ["bing", "google", "quote", "reddit", "weather"],
    "Editors & Fun": ["echo", "emacs", "nvim", "vi", "vim"]
} as const;

export const COMMANDS = Object.values(CATEGORIES).flat().sort();
