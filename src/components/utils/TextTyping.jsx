import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [startTyping, setStartTyping] = useState(false);
    const ref = useRef(null);

    // Use a single observer instance and clean up properly
    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Optimize typing effect by using a single interval and cleanup
    useEffect(() => {
        if (!startTyping) return;
        setDisplayedText(""); // Reset before typing
        let index = 0;
        let cancelled = false;

        const type = () => {
            if (cancelled) return;
            setDisplayedText(text.slice(0, index + 1));
            if (index < text.length - 1) {
                index++;
                setTimeout(type, speed);
            }
        };

        type();

        return () => {
            cancelled = true;
        };
    }, [text, speed, startTyping]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, transition:"all ease-in .3s" }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-pretty tracking-wider h-[28rem]  md:h-fit text-neutral-900 md:text-neutral-200"
        >
            <blockquote>{displayedText}</blockquote>
        </motion.div>
    );
};

export default TypingEffect;