import CardImage from "./CardImage";
import Button from "./Button";

interface CardProps {
    src: string;
    alt: string;
    name: string;
    description: string;
    link: string;
    side?: boolean;
    button?: boolean;
}

const Card = ({ src, alt, name, description, link, side = true, button = true }: CardProps) => {
    return (
        <div className={`flex flex-row ${side ? '' : 'flex-row-reverse'} gap-12 mb-16 p-6 `}>
            <CardImage src={src} alt={alt} />
            <div className={`flex flex-col ${side ? 'items-end' : 'items-start'}`}>
                <h3 className={`text-2xl font-bold mb-4 text-light-text dark:text-dark-text`}>{name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">{description}</p>
                {button && (<Button link={link}/>)}
            </div>
        </div>
    );
};

export default Card;