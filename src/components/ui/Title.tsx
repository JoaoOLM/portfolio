'use client';

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const Title = ({ title } : {title:string}) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [controls, isInView]);
    
    return (
      <div className="mb-10">
        <motion.h2
          ref={ref}
          className="text-3xl font-bold text-light-text dark:text-dark-text inline-block border-b-2 border-light-accent dark:border-dark-accent pb-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      </div>
    );
  };

export default Title;

  