import {MiniTitle} from "./MiniTitle.tsx";
import dummy from '../assets/dummy.png';


export function Projects(){
    return(
        <div className="px-7 min-h-screen scroll-m-20 items-center justify-center flex flex-col"  id="projects">
            <div className="w-full max-w-200 flex flex-col justify-center">
                <div className="flex items-center ">
                    <div className="h-px w-5 bg-blue-500"></div>
                    <MiniTitle>Featured Projects</MiniTitle>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <ProjectList />
                    <ProjectList />
                    <ProjectList />
                    <ProjectList />
                </div>

            </div>
        </div>
    )
}
export function ProjectList(){
    return(
        <div className="border border-zinc-700 rounded-2xl overflow-hidden " >
            <div className="bg-zinc-800/20 " >
                <img src={dummy} alt="dummy" className="w-full h-auto block"/>
            </div>
            <div className="p-5 bg-zinc-800/10">
                <p className="text-white text-xl font-bold ">React Frontend Projects</p>
                <p className="text-zinc-400 my-3 text-sm">Building responsive interfaces and modern web applications using reusable components, clean layouts, and contemporary CSS techniques</p>
                <p className="text-zinc-600" >React * JavaScript * CSS</p>
            </div>
        </div>
    )
}