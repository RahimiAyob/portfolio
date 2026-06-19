import type {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

export function Button({children , onClick}:  ButtonProps ) {
    return (
        <button onClick={onClick} className="text-gray-400 px-3 py-5 text-sm">{children}</button>
    )
}