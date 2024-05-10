import { cn } from "@/utils/cn";
import React from "react";

export const BentoGridBase = ({
                              className,
                              children,
                          }) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-1  mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }) => {
    return (
        <div
            className={cn(
                " row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 hover:scale-105",
                className
            )}
        >
            {header}
            
        </div>
    );
};
