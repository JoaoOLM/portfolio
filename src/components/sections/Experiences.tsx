import Title from "../ui/Title";
import CardSlider from "../ui/CardSlider";

const experiences = [
    {
        src: "/experiences/secomp.jpg",
        alt: "Membros da SECOMP",
        name: "SECOMP",
        description:
            "A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas são convidados a apresentar, discutir e debater experiências e novidades que trarão informações, conhecimentos e inovação aos participantes!",
        link: "https://www.secompufscar.com.br/",
        side: false,
        button: true,    
    },
    {
        src: "/experiences/secomp.jpg",
        alt: "Membros da SECOMP",
        name: "SECOMP",
        description:
            "A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas são convidados a apresentar, discutir e debater experiências e novidades que trarão informações, conhecimentos e inovação aos participantes!",
        link: "https://www.secompufscar.com.br/",
        side: true,
        button: true,
    },
    {
        src: "/experiences/secomp.jpg",
        alt: "Membros da SECOMP",
        name: "SECOMP",
        description:
            "A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas são convidados a apresentar, discutir e debater experiências e novidades que trarão informações, conhecimentos e inovação aos participantes!",
        link: "https://www.secompufscar.com.br/",
        side: false,
        button: true,
    },
]

const Experiences = () => {
    return (
        <section id="experiencias" className="mb-16">
            <Title title="Experiências" />
            <CardSlider projects={experiences} />
        </section>
    );
};

export default Experiences;
