import Title from "../ui/Title";
import CardSlider from "../ui/CardSlider";

const about = [
    {
        src: "/about/joao.jpeg",
        alt: "Imagem do João",
        name: "Quem sou eu",
        description:
            "Sou um desenvolvedor front-end apaixonado por criar interfaces de usuário incríveis e funcionais. Tenho experiência em React, TypeScript e Tailwind CSS, e estou sempre em busca de novos desafios e aprendizados.",
        link: "",
        side: true,
        button: false,
    },
    {
        src: "/about/joao.jpeg",
        alt: "Imagem do João",
        name: "Quem sou eu",
        description:
            "Sou um desenvolvedor front-end apaixonado por criar interfaces de usuário incríveis e funcionais. Tenho experiência em React, TypeScript e Tailwind CSS, e estou sempre em busca de novos desafios e aprendizados.",
        link: "",
        side: false,
        button: false,
    },
    {
        src: "/about/joao.jpeg",
        alt: "Imagem do João",
        name: "Quem sou eu",
        description:
            "Sou um desenvolvedor front-end apaixonado por criar interfaces de usuário incríveis e funcionais. Tenho experiência em React, TypeScript e Tailwind CSS, e estou sempre em busca de novos desafios e aprendizados.",
        link: "",
        side: true,
        button: false,
    },
];

const About = () => {
    return (
        <section id="sobre" className="mb-16">
            <Title title="Sobre" />
            <CardSlider projects={about} />
        </section>
    );
};

export default About;
