import {TopBar} from "./components/TopBar.tsx";
import {Hero} from "./components/Hero.tsx";
import {AboutMe} from "./components/AboutMe.tsx";
import {TechnicalSkills} from "./components/TechnicalSkills.tsx";

export default function App(){
    return(
        <div>
            <div>
                <TopBar />
                <Hero />
                <AboutMe />
                <TechnicalSkills />
            </div>
        </div>
    )
}


