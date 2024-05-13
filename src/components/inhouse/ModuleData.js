import React from "react";
import ModuleList from "./ModuleList";

const ModuleData = () => {
  const modules = [
    "Cell Biology",
    "Anatomy & Physiology",
    " Biochemistry",
    "Parasitology ",
    "Microbiology I & II",
    " Clinical Biochemistry ",
    "Hematology & Blood Bank Serology",
    " Immunology ",
    "Histopathology ",
    "Genetics & Molecular Biology",
    "Laboratory Management Laboratory Techniques",
  ];
  const modules2 = [
    "Statistics & Analysis of Scientific Information & Data",
    "Infectious Diseases",
    " Occupational health and safety",
    "Quality control and assurance ",
  ];

  return (
    <div className="flex flex-row gap-32 justify-center  ">
      <div className="  ">
        <ModuleList modules={modules} />
      </div>
      <div className="">
        <h2 className="text-md font-bold mt-2 ">Electives (choice of three)</h2>
        <ModuleList modules={modules2} />
      </div>
    </div>
  );
};

export default ModuleData;
