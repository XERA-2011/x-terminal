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
                        className="whitespace-pre overflow-x-auto w-full mb-2"
                        style={{ lineHeight: "1.5" }}
                        dangerouslySetInnerHTML={{ __html: entry.output }}
                    />
                </div>
            ))}
        </>
    );
};

export default History;
