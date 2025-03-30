import Image from "next/image";

const CardImage = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={256}
            height={256}
            className="object-cover w-[450px] h-[250px] rounded-lg border-2 border-light-accent dark:border-dark-accent"
        />
    );
}

export default CardImage;