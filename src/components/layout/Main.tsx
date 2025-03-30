import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import About from "../sections/About";

const Main = () => {    
    return (
        <main className="flex-1 ml-16 mr-20 px-40 py-20">
            {/* Seção Hero */}
            <Hero />

            {/* Seção de Projetos */}
            <Projects />

            {/* Seção de Experiências */}
            <Experiences />

            {/* Seção Sobre Mim */}
            <About />
        </main>
    );
};

export default Main;
