import { COMMANDS } from "./commands";

export const handleTabCompletion = (
    command: string,
    setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
    const matches = COMMANDS.filter((entry) =>
        entry.startsWith(command.toLowerCase())
    );

    if (matches.length === 1) {
        setCommand(matches[0]);
    }
};
