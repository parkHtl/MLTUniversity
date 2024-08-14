import AboutUs from "@/components/inhouse/AboutUs";
import ModuleData from "@/components/inhouse/ModuleData";
import ModuleList from "@/components/inhouse/ModuleList";
import Partners from "@/components/inhouse/Partners";
import Reference from "@/components/inhouse/Reference";
import Table from "@/components/inhouse/Table";
import { StickyScrollReveal } from "@/components/inhouse/stickyScroll";
import { BentoGrid } from "@/components/inhouse/bentoGrid";
import { Tab } from "@mui/material";
import Country from "@/components/inhouse/Country";

export default function Page() {
  return (
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 space-y-5 mt-10 ">
     
      <div className="flex flex-col  ">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5 underline">
          2-Year Diploma in Medical Laboratory Technology (MLT)
        </h1>
        <p className="text-center px-2 md:px-10">
          Delivered since 1996, this program offers a modern career opportunity in a job market dominated by employers. As part of the healthcare team, the Medical Laboratory Technologist manages a wide variety of laboratory tests and procedures that assist doctors in the diagnosis, treatment, and prevention of diseases. The PGC program provides a scientific foundation as well as thorough competency-based training, enabling students to develop hands-on knowledge to secure employment in the industry. Our close collaboration with top industry partners gives students access to the most modern methodologies and equipment, preparing graduates for employment across the globe.
        </p>
      </div>

      <div className="flex flex-col mt-5 mb-5 ">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5 underline">
          Programme Delivery CPT
        </h1>
        <h2 className="text-center text-lg font-bold">
          Online / On-Campus / On-the-Job – Hybrid delivery method.
        </h2>
        <p className="text-center px-2 md:px-10">
          The programme's objective is employability. Hence, PGC will emphasize skill competencies and on-the-job training as the core focus of the delivery. For this purpose, we will use the CPT (Curricular Practical Training) methodology, where students will primarily be employed, and their employment experience will be carefully vetted and validated as training. The first semester (4-5 months) will include lectures, classroom practicals, and demonstrations, which students must attend according to the class schedules (full-time or part-time). Some modules may be delivered fully or partially through video presentations. The PGC Education management team oversees industrial training in collaboration with major private healthcare institution networks. PGC Education Academy reserves the right to change the venue, date, and time for some modules and practicals, but such changes will not exceed 30% of the entire programme.
        </p>
      </div>
      <div className="flex flex-col mt-5 mb-5 ">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5 underline">
          GENERAL MODULES
        </h1>
        <ModuleData />
      </div>
      

      <div className="w-full mt-5">
        <Table />
      </div>
      <div className="flex flex-col mt-5 mb-5 ">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5 underline">
        RPL/CREDIT EXEMPTIONS
        </h1>
        <h2 className="text-center text-lg font-bold">
       
        </h2>
        <p className="text-center px-2 md:px-10">
        {`Individuals with work experience in a laboratory registered with PHSRC or at a government establishment, or those with other relevant MLT qualifications, will be assessed on a case-by-case basis by our academic council, followed by an aptitude test to determine credit exemptions. Those with more than 5 years of work experience are exempt from the CPT.`}
        </p>
      </div>
      <div>
        <h2 className={"text-2xl underline text-center font-bold pb-10 mt-[40px]"}>
          FURTHER EDUCATION OPPORTUNITIES
        </h2>
        <Country/>
      </div>
      <div className="mt-10">
        <div className="mt-10">
          <Reference />
        </div>
      </div>

    </div>
  );
}
