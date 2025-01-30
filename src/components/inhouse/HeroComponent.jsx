"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/acui/hero";

export function HeroComponent() {
    const images = [
        "/images/L2.jpg",
        "/images/L3.jpg",
    ];
    return (
        <ImagesSlider className="h-[70vh]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                
                
            </motion.div>
        </ImagesSlider>
    );
}
