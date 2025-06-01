import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [hasTyped, setHasTyped] = useState(false);
    const ref = useRef(null);

    // Intersection Observer to trigger typing
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasTyped(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Typing effect
    useEffect(() => {
        if (!hasTyped) return;
        setDisplayedText("");
        let index = 0;
        let timeoutId;

        const type = () => {
            setDisplayedText(text.slice(0, index + 1));
            if (index < text.length - 1) {
                index++;
                timeoutId = setTimeout(type, speed);
            }
        };

        type();

        return () => clearTimeout(timeoutId);
    }, [text, speed, hasTyped]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="text-pretty tracking-wider h-[30rem] md:h-auto  text-neutral-900  md:text-neutral-300"
        >
            <blockquote>{displayedText}</blockquote>
        </motion.div>
    );
};

export default TypingEffect;
