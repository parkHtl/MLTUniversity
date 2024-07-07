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
    <div className="px-2 md:px-10 lg:px-20 xl:px-40 space-y-5 ">
     
      <div className="flex flex-col  ">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5 underline">
          2 - YEAR DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY (MLT)
        </h1>
        <p className="text-center px-2 md:px-10">
          Delivered since 1996 A modern career opportunity in the employees
          dominated market! As part of the health-care team, the Medical
          Laboratory Technologist manages a large variety of laboratory tests
          and procedures that assist doctors in the diagnosis, treatment, and
          prevention of diseases. PGC programme provides a scientific foundation
          as well a thorough competency-based training solution enabling the
          students to develop hands on knowledge to acquire employment in the
          industry. The fact that we closely work with TOP end industry partners
          provide our students the access to most modern methodologies and
          equipment which prepares graduates ready for employment across the
          globe.
        </p>
      </div>

      <div className="flex flex-col mt-5 mb-5 ">
        <h1 className="text-center text-2xl font-bold mt-5 mb-5 underline">
          PROGRAMME DELIVERY CPT
        </h1>
        <h2 className="text-center text-lg font-bold">
          ONLINE / ON CAMPUS / ON THE JOB - hybrid delivery method.
        </h2>
        <p className="text-center px-2 md:px-10">
          The programme objective is employability. Hence the PGC will put
          emphasis on the skill competencies levels and on the job training as
          the Cofocus of the delivery. For this purpose, we will be using the
          CPT (Curricular practical training) methodology where most of the time
          the student shall be employed, and the employment experience shall be
          carefully vetted and validated as the training. The first semester (
          4-5 months) shall be lectures, classroom practical’s, demonstrations
          which the student has to attend according the class time schedules(
          Full time or Part time ). Some of our modules may be delivered fully
          or partly through video presentations. The programme PGC Education
          management has the industrial training carried out in collaboration
          with major private healthcare institution networks. PGC Education
          Academy reserves the right to change the venue, date, and time for
          some modules and practical which will not be more than 30% of the
          whole programme.
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
