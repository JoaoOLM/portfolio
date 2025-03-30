'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const CardSlider = ({ projects }: { projects: Array<{
    src: string;
    alt: string;
    name: string;
    description: string;
    link:string;
    side: boolean;
    button: boolean;
}> }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev" | null>(null);
    
    const slideVariants = {
        hiddenRight: {
            x: 300,
            opacity: 0
        },
        hiddenLeft: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    
    const navigateSlide = (newDirection: "next" | "prev") => {
        setDirection(newDirection);
        if (newDirection === "next") {
            setCurrentIndex((prevIndex) => 
                prevIndex + 1 === projects.length ? 0 : prevIndex + 1
            );
        } else {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            );
        }
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            navigateSlide("next");
        }, 5000); // Change slide every 5 seconds
        
        return () => clearInterval(interval);
    }, [currentIndex]);
    
    return (
        <div className="relative overflow-hidden w-full flex flex-col items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial={direction === "next" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    className="w-full flex justify-center"
                >
                    <Card
                        src={projects[currentIndex].src}
                        alt={projects[currentIndex].alt}
                        name={projects[currentIndex].name}
                        description={projects[currentIndex].description}
                        link={projects[currentIndex].link}
                        side={projects[currentIndex].side}
                        button={projects[currentIndex].button}
                    />
                </motion.div>
            </AnimatePresence>
            
            {projects.length > 1 && (
                <div className="flex justify-center items-center gap-4 pb-4 w-full mt-4">
                    <motion.button
                        onClick={() => navigateSlide("prev")}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-light-accent hover:dark:bg-dark-accent text-gray-700 dark:text-gray-200 hover:text-white md:p-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Projeto anterior"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <div className="flex gap-2 items-center">
                        {projects.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                    currentIndex === index 
                                        ? 'w-6 bg-light-accent dark:bg-dark-accent' 
                                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                                }`}
                                onClick={() => {
                                    setDirection(index > currentIndex ? "next" : "prev");
                                    setCurrentIndex(index);
                                }}
                                whileHover={{ scale: 1.2 }}
                                aria-label={`Ir para projeto ${index + 1}`}
                                role="button"
                                tabIndex={0}
                            />
                        ))}
                    </div>
                    <motion.button
                        onClick={() => navigateSlide("next")}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-light-accent hover:dark:bg-dark-accent text-gray-700 dark:text-gray-200 hover:text-white md:p-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Próximo projeto"
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </div>
            )}
        </div>
    );
};

export default CardSlider;