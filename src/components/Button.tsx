import type {ReactNode} from "react";

export function Button({children}: { children: ReactNode }) {
    return (
        <button className="text-gray-400 px-3 py-5 text-sm">{children}</button>
    )
}