import React from 'react';

const cardClasses = "border border-muted p-4 rounded-lg text-center w-full md:w-1/3";
const imageClasses = "mx-auto my-4";
const textPrimaryClasses = "text-primary font-bold";

const ProgramCard = ({ country, university, logoText, program, location }) => {
  return (
    <div className={cardClasses}>
      <h2 className={textPrimaryClasses}>{country}</h2>
      <img src={`https://placehold.co/100x100?text=${logoText}`} alt={`${university} logo`} className={imageClasses} />
      <p>{program}</p>
      <p className="font-bold">{location}</p>
    </div>
  );
};

const Country = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <ProgramCard
        country="MALAYSIA"
        university="MSU"
        logoText="MSU"
        program="Final Year TOPUP to Bachelor of Biomedical Science (Hons) Degree"
        location="SRI LANKA | MALAYSIA"
      />
      <ProgramCard
        country="UNITED KINGDOM"
        university="Oxford Brookes"
        logoText="Oxford+Brookes"
        program="Final Year TOPUP to BSc (Hons) Biomedical Science"
        location="SRI LANKA | UK"
      />
      <ProgramCard
        country="AUSTRALIA"
        university="CQUniversity"
        logoText="CQUniversity"
        program="Transfer to Bachelor of Medical Laboratory Science"
        location="AUSTRALIA"
      />
    </div>
  );
};

export default Country ;
