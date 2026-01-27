"use client";

import type { History as HistoryInterface } from "@/lib/history";
import { Ps1 } from "./ps1";

interface HistoryProps {
    history: HistoryInterface[];
}

export const History: React.FC<HistoryProps> = ({ history }) => {
    return (
        <>
            {history.map((entry: HistoryInterface, index: number) => (
                <div key={entry.command + index}>
                    <div className="flex flex-row space-x-2">
                        <Ps1 />
                        <div className="flex-grow">{entry.command}</div>
                    </div>

                    <div
                        className="whitespace-pre-wrap break-words overflow-x-hidden w-full mb-2"
                        style={{ lineHeight: "1.5" }}
                    >
                        {typeof entry.output === 'string' ? (
                            <div dangerouslySetInnerHTML={{ __html: entry.output }} />
                        ) : (
                            entry.output
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default History;
