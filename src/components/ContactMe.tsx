import {MiniTitle} from "./MiniTitle.tsx";
import githubwhite from "../assets/github-white-icon.png";
import linkedinwhite from "../assets/linkedinwhite.png";

export function ContactMe(){
    return (
        <div id="contact" className="flex flex-col px-7 items-center justify-center h-[50vh]">
            <div className="flex items-center">
                <div className="h-px w-5 bg-blue-500"></div>
                <MiniTitle>Get In Touch</MiniTitle>
                <div className="h-px w-5 bg-blue-500"></div>
            </div>
            <div>
                <p className={"text-zinc-400 max-w-96 text-center"}>Always interested in learning, collaborating, and building
                interesting projects. Drop a line if you want to get in contact with me</p>
            </div>
            <div className="flex my-5 gap-x-3">
                <button className="size-10 hidden md:block"><img src={githubwhite} alt="githubwhite"/></button>
                <button className="size-10 hidden md:block"><img src={linkedinwhite} alt="linkedinwhite"/></button>
                <button className="bg-blue-500 px-5 text-sm border border-zinc-800 rounded-md text-white">Email Me</button>
            </div>
        </div>
    )
}