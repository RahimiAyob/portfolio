import type {ReactNode} from "react";

export function MiniDescription({children}: { children: ReactNode }) {
    return (
        <p className="text-zinc-500">{children}</p>
    )
}