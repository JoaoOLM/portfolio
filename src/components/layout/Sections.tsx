import Section from "../ui/Section";

const sections = [
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiências", href: "#experiencias" },
    { name: "Sobre", href: "#sobre" }
];

const Sections = () => {
    return (
        <div className="fixed right-0 top-0 w-52 h-screen px-10 py-20">
            {sections.map((section, index) => 
                <Section section={section.name} link={section.href} key={index} />	
            )}
        </div>
    );
};

export default Sections;
