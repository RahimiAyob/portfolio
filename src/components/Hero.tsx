import {Terminal} from "lucide-react";
import githubwhite from "../assets/github-white-icon.png";
import linkedinwhite from "../assets/linkedinwhite.png";

export function Hero() {

    return (
        <div id="hero" className="flex flex-col justify-center items-center h-screen text-white text-center max-w-2xl mx-auto">
            <Terminal className="text-zinc-50 group-hover: " size={64}/>
            <h1 className="text-3xl md:text-5xl font-bold md:m-5 m-8">Muhammad Rahimi bin Mohamad Ayob</h1>
            <p className="text-blue-400">Semester 4 Computer Science (CS230) Student | Frontend Developer | AI &
                Software Exploration Enthusiast</p>
            <p className="text-zinc-500 py-3">I'm a Computer Science student from UiTM who enjoys building modern web
                applications, experimenting with AI technologies, and understanding software beyond the surface.
                I spend much of my free time creating side projects, exploring new tools, and continuously learning
                through experimentation.</p>
            <div className="flex gap-5 py-5">
                <button className="bg-zinc-900 px-5 py-2 text-sm border border-zinc-800 rounded-md">View
                    Projects </button>
                <button className="bg-blue-500 px-5 text-sm border border-zinc-800 rounded-md">Contact Me</button>
                <button className="size-10 hidden md:block"><img src={githubwhite} alt="githubwhite"/></button>
                <button className="size-10 hidden md:block"><img src={linkedinwhite} alt="linkedinwhite"/></button>
            </div>
        </div>
    )
}

