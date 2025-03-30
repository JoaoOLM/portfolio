import Section from "../ui/Section";

const sections = [
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Sobre", href: "#sobre" }
];

const Sections = () => {
    return (
        <>
            {/* Sidebar (telas grandes) */}
            <div className="fixed right-0 top-0 w-52 h-screen px-10 py-20 hidden sm:flex flex-col">
                {sections.map((section, index) => 
                    <Section section={section.name} link={section.href} key={index} />	
                )}
            </div>

            {/* Header fixo (telas pequenas) */}
            <div className="fixed top-0 left-0 w-full py-3 px-6 flex justify-around items-center sm:hidden shadow-md bg-white dark:bg-black z-10 gap-4 overflow-auto">
                {sections.map((section, index) => 
                    <Section section={section.name} link={section.href} key={index} />
                )}
            </div>
        </>
    );
};

export default Sections;
