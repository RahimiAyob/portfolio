type CardProps = {
    title: string;
    items: string[];
}

export function Cards( { title, items} : CardProps) {
    return (
        <div className="px-3 py-2 bg-zinc-900/40 outline-zinc-900 outline rounded-2xl ">
            <p className="text-zinc-500 font-bold text-sm">{title}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {items.map((item) => (
                    <p className="rounded-lg inline px-3 py-1 outline-zinc-800  outline bg-zinc-900 text-zinc-300 font-bold text-sm">{item}</p>
                ))}
            </div>
        </div>
    )
}