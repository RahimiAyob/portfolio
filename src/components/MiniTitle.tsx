import type {ReactNode} from "react";

export function MiniTitle({children} : {children: ReactNode}) {
    return (
        <h1 className="text-white text-2xl font-bold m-5">{children}</h1>
    )
}