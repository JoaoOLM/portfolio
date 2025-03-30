'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Background = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden" >
            {isClient && [...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                    style={{
                        filter: "blur(4px)",
                        boxShadow: "0 0 8px #FFD700",
                        opacity: Math.random() * 0.5 + 0.5,
                        top: `${Math.random() * window.innerHeight}px`,
                        left: `${Math.random() * window.innerWidth}px`
                    }}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    }}
                    animate={{
                        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div >
    );
};

export default Background;