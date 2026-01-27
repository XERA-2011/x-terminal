import { COMMANDS } from "./commands";

// Type for command functions
type CommandFunction = (args: string[]) => Promise<string | React.ReactNode> | string | React.ReactNode;

// Dynamic import of commands
const getCommandFunction = async (commandName: string): Promise<CommandFunction | null> => {
    const commands = await import("./commands");
    if (commandName in commands && typeof commands[commandName as keyof typeof commands] === "function") {
        return commands[commandName as keyof typeof commands] as CommandFunction;
    }
    return null;
};

export const shell = async (
    command: string,
    setHistory: (value: string | React.ReactNode) => void,
    clearHistory: () => void,
    setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
    const args = command.split(" ");
    args[0] = args[0].toLowerCase();

    if (args[0] === "clear") {
        clearHistory();
    } else if (command === "") {
        setHistory("");
    } else if (!COMMANDS.includes(args[0] as typeof COMMANDS[number])) {
        setHistory(
            `shell: command not found: ${args[0]}. Try 'help' to get started.`
        );
    } else {
        const fn = await getCommandFunction(args[0]);
        if (fn) {
            const output = await fn(args.slice(1));
            setHistory(output);
        } else {
            setHistory(`shell: command not found: ${args[0]}.`);
        }
    }

    setCommand("");
};
