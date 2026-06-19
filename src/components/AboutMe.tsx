import {MiniTitle} from "./MiniTitle.tsx";
import {MiniDescription} from "./MiniDescription.tsx";

export function AboutMe() {
    return (
        <div id="about" className="flex flex-col px-7 h-screen scroll-mt-20">
            <div className="flex items-center">
                <div className="h-px w-5 bg-blue-500"></div>
                <MiniTitle>About me</MiniTitle>
            </div>
            <div className="flex flex-col space-y-5 max-w-120">
                <MiniDescription>
                    I started exploring software development around the age of 15
                    through curiosity and experimentation.
                    What began as basic tinkering quickly turned into a deep engagement with
                    building applications and uncovering how complex ecosystems function.
                </MiniDescription>
                <MiniDescription>
                    Over the years, I have spent time learning different technologies by
                    building projects and taking software apart to understand how it
                    works internally. Rather than sticking purely to a structured
                    curriculum, I find the most valuable insights come when pushing
                    past defaults to discover underlying system architectures.
                </MiniDescription>
                <MiniDescription>
                    My interest extend beyond traditional coursework into frontend
                    development, AI applications, reverse engineering, developer
                    tooling, and user interface design. I enjoy creating projects that allow
                    me to explore new ideas while improving both technical and
                    problem-solving skills.
                </MiniDescription>
            </div>
        </div>
    )
}