'use client';

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

import CardImage from "./CardImage";
import Button from "./Button";

const Card = ({ src, alt, name, description, link, side, button }: { src: string, alt: string, name: string, description: string, link:string, side: boolean, button: boolean }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const cardVariants = {
        hidden: {
            opacity: 0,
            x: side ? -50 : 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col sm:flex-row gap-6 sm:gap-12 mb-16 p-6`}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
        >
            <CardImage src={src} alt={alt} />
            <div className={`flex flex-col ${side ? 'items-end' : 'items-start'}`}>
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 text-light-text dark:text-dark-text`}>{name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify text-sm sm:text-base">{description}</p>
                {button && (<Button link={link}/>)}
            </div>
        </motion.div>
    );
};

export default Card;
