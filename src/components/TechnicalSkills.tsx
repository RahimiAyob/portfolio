import {MiniTitle} from "./MiniTitle.tsx";
import {MiniDescription} from "./MiniDescription.tsx";
import {Cards} from "./Cards.tsx";

export function TechnicalSkills() {
    return (
        <div id="skills" className="flex flex-col px-7 h-screen scroll-mt-20">
            <div className="flex items-center">
                <div className="h-px w-5 bg-blue-500"></div>
                <MiniTitle>Technical Skills </MiniTitle>
            </div>
            <div className="flex flex-col space-y-5 max-w-120">
                <MiniDescription>
                    A realistic look at my stack and toolsets, cultivated
                    through active use and documentation parsing.
                </MiniDescription>
            </div>
            <div className="grid grid-cols-2 gap-4 my-5">
                <Cards
                    title="&lt;/&gt; LANGUAGES"
                    items={["JavaScript", "Python", "Java", "C++", "HTML", "CSS"]}
                />
                <Cards
                    title="Frameworks"
                    items={["React", "Flutter"]}
                />
                <Cards
                    title="AI & APIS"
                    items={["LLM API Interation", "Discord API", "Prompt Engineering", "Multimodal AI Experimentation"]}
                />
                <Cards
                    title="ENVIRONMENT & VIM"
                    items={["Arch Linux", "Terminal / CLI Workflow", "Git & Github", "JetBrains IDE's", "IdeaVim", "VS Code"]}
                />
                <Cards
                    title="EXPLORATIONS & SYSTEMS TOOLS "
                    items={["dnspy", "Unity", ".NET Framework"]}
                />

            </div>
        </div>
    )
}