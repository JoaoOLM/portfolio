'use client';

import Image from "next/image";
import { GraduationCap, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [typingSpeed, setTypingSpeed] = useState(150);

    const loopNumRef = useRef(0);
    const isDeletingRef = useRef(false);
    const currentTextRef = useRef("");

    const interests = [
        "Programação",
        "IA",
        "Backend",
        "Nuvem",
        "Dev Web",
        "Algoritmos"
    ];

    const handleTyping = useCallback(() => {
        const i = loopNumRef.current % interests.length;
        const fullText = interests[i];

        if (isDeletingRef.current) {
            currentTextRef.current = fullText.substring(0, currentTextRef.current.length - 1);
            setTypingSpeed(100);
        } else {
            currentTextRef.current = fullText.substring(0, currentTextRef.current.length + 1);
            setTypingSpeed(150);
        }

        setDisplayText(currentTextRef.current);

        if (!isDeletingRef.current && currentTextRef.current === fullText) {
            setTypingSpeed(2000);
            isDeletingRef.current = true;
        } else if (isDeletingRef.current && currentTextRef.current === '') {
            isDeletingRef.current = false;
            loopNumRef.current += 1;
            setTypingSpeed(500);
        }
    }, [interests]);

    useEffect(() => {
        const ticker = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(ticker);
    }, [handleTyping, typingSpeed]);

    return (
        <section id="home" className="flex flex-col-reverse lg:flex-row items-center gap-8 p-6 md:p-12 w-full max-w-6xl mx-auto">
            {/* Texto e informações */}
            <motion.div
                className="flex flex-col flex-1 items-center lg:items-start text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 12 }}
            >
                <motion.h1
                    className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Olá, sou um <br />
                    <motion.span className="text-light-accent dark:text-dark-accent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
                        Desenvolvedor
                    </motion.span>
                </motion.h1>

                <motion.div className="text-lg sm:text-2xl font-medium text-light-text dark:text-dark-text mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}>
                    Gosto de <span className="text-light-accent dark:text-dark-accent font-semibold">{displayText}</span>
                    <span className="text-light-accent dark:text-dark-accent animate-pulse">|</span>
                </motion.div>

                {/* Informações adicionais */}
                <motion.div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}>
                    <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <GraduationCap className="text-light-accent dark:text-dark-accent" size={24} />
                        <h1 className="text-lg font-medium tracking-wide text-gray-300">UFSCar</h1>
                    </motion.div>
                    <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <MapPinned className="text-light-accent dark:text-dark-accent" size={24} />
                        <h1 className="text-lg font-medium tracking-wide text-gray-300">São Carlos</h1>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Imagem */}
            <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg border-2 border-light-accent dark:border-dark-accent flex items-center justify-center"
                initial={{ opacity: 0, y: 20, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05 }}
            >
                <Image src="/self.jpeg" alt="Foto de Perfil" width={256} height={256} className="object-cover w-full h-full" priority loading="eager" />
            </motion.div>
        </section>
    );
};

export default Hero;