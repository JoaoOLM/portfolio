import Title from "../ui/Title";
import CardSlider from "../ui/CardSlider";

const projects = [
    {
        src: "/projects/arca.png",
        alt: "Imagem da Arca do Cerrado",
        name: "Arca do Cerrado",
        description: "O Arca do Cerrado é um site que visa alcançar o maior número de pessoas interessadas na preservação e conhecimento da biodiversidade do Cerrado. Oferecemos um mapa interativo em escala que representa a localização de cada uma de nossas mudas.",
        link: "https://github.com/petbccufscar/arca-do-cerrado",
        side: true,
        button: true,
    },
    {
        src: "/projects/arca.png",
        alt: "Imagem da Arca do Cerrado",
        name: "Arca do Cerrado",
        description: "O Arca do Cerrado é um site que visa alcançar o maior número de pessoas interessadas na preservação e conhecimento da biodiversidade do Cerrado. Oferecemos um mapa interativo em escala que representa a localização de cada uma de nossas mudas.",
        link: "https://github.com/petbccufscar/arca-do-cerrado",
        side: false,
        button: true,
    },
    {
        src: "/projects/arca.png",
        alt: "Imagem da Arca do Cerrado",
        name: "Arca do Cerrado",
        description: "O Arca do Cerrado é um site que visa alcançar o maior número de pessoas interessadas na preservação e conhecimento da biodiversidade do Cerrado. Oferecemos um mapa interativo em escala que representa a localização de cada uma de nossas mudas.",
        link: "https://github.com/petbccufscar/arca-do-cerrado",
        side: true,
        button: true,
    },
];

const Projects = () => {
    return (
        <section id="projetos" className="mb-16 bg-transparent">
            <Title title="Projetos" />
            <CardSlider projects={projects} />
        </section>
    );
};

export default Projects;
