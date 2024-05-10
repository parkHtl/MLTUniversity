import { cn } from "@/utils/cn";
import React from "react";
import { BentoGridItem, BentoGridBase } from "@/components/acui/bento-grid";

import SimpleCard from "../mui/SimpleCard";

export function BentoGrid() {
  return (
    <BentoGridBase className="w-full ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGridBase>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "",
    description: "",
    header: (
      <img className="w-[100%] h-[100%] "
        src="https://www.eduoneinternational.com/wp-content/uploads/2022/04/MLT.jpg"
        alt="placeholder"
      />
    ),
    icon: "",
    src: "",
  },

  {
    title: "",
    description: "",
    header: <img className="w-[100%] h-[100%]"
    src="https://www.newswire.lk/wp-content/uploads/2023/07/2-Saegis-Campus.jpg"
    alt="placeholder"
  />,
    icon: "",
  },

  {
    title: "",
    description: "",
    header: <img className="w-[100%] h-[100%]"
    src="https://flc.losrios.edu//flc/main/img/Social-1200x630/Academics/Programs-Majors/medical_lab_tech.jpg"
    alt="placeholder"
  />,
    icon: "",
  },

  {
    title: "",
    description: "",
    header: <SimpleCard />,
    icon: "",
  },

  {
    title: "",
    description: "",
    header: (
      <img
        className="w-[100%] h-[100%]"
        src="https://www.usnews.com/object/image/0000015b-b66f-d19d-a7db-bfff8c710000/170428-collegetour-stock.jpg?update-time=1536955480383&size=responsive640"
        alt="placeholder"
      />
    ),
    icon: "",
  },

  {
    title: "",
    description: "",
    header: (
      <img
        className="w-[100%] h-[100%]"
        src="https://images.news18.com/ibnlive/uploads/2023/06/college-students.jpg"
        alt="placeholder"
      />
    ),
    icon: "",
  },

  {
    title: "",
    description: "",
    header: (
      <img className="w-[100%] h-[100%]"
        src="https://www.expertcampus.lk/images/Internship%20Program.jpg"
        alt="placeholder"
      />
    ),
    icon: "",
  },
];
