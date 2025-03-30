const Button = ({ link }: { link: string }) => {
    return (
        <a href={link} target="_" className="mt-auto">
            <button className="bg-light-primary dark:bg-dark-primary text-white font-bold py-3 px-6 rounded-xl
                                hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all duration-300 shadow-md hover:scale-105"
            >
                Conhecer mais
            </button>
        </a>
    );
};

export default Button;