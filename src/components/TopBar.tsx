import {Button} from "./Button.tsx";
import Hamburger from 'hamburger-react'
import {useState} from "react";



export function TopBar() {
    const [isOpen, setOpen] = useState(false);
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div>
            {/*medium to high screen*/}
            <div className="fixed w-full flex justify-between bg-black ">
                <div>
                    <p className="text-gray-500 p-5 text-sm">~/rahimi-ayob</p>
                </div>
                <div className="hidden md:flex mx-2 p-2 ">
                    <Button onClick = {() => scrollTo("hero")}> Home </Button>
                    <Button onClick = {() => scrollTo("about")}> About </Button>
                    <Button onClick = {() => scrollTo("skills")}> Skills </Button>
                    <Button onClick = {() => scrollTo("projects")}> Projects </Button>
                    {/*<Button> Journey </Button>*/}
                    <Button onClick = {() => scrollTo("contact")}> Contact </Button>
                </div>
            </div>
            {/*small screen*/}
            <div className="py-2 fixed right-0 md:hidden z-100 ">
                <Hamburger toggled={isOpen} toggle = {setOpen} size={24} color="#6b7280"  />
            </div>
            <div>
                {isOpen && (
                    <div>
                        <div className="inset-0 z-40 bg-black/30 fixed" onClick={() => setOpen(false)}/>
                        <div className="items-center z-50 md:hidden fixed right-0 w-48 bg-gray-600 inline p-10 text-lg space-y-1 h-screen" >
                            <ul className="flex flex-col gap-5 my-10 text-zinc-300">
                                <button onClick={() => scrollTo("hero")}>Home</button>
                                <button onClick={() => scrollTo("about")}> About </button>
                                <button onClick={() => scrollTo("skills")}> Skills </button>
                                <button onClick={() => scrollTo("projects")} > Projects </button>
                                {/*<Button> Journey </Button>*/}
                                <button onClick={() => scrollTo("contact")} > Contact </button>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}