import { COMMANDS } from "./commands";

export const commandExists = (command: string): boolean => {
    const cmd = command.split(" ")[0].toLowerCase();
    return COMMANDS.includes(cmd as typeof COMMANDS[number]);
};
