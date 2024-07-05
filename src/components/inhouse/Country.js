import React from 'react';

const cardClasses =
  'border border-muted p-4 rounded-xl text-center w-full md:h-[355px] h-[375px] md:w-1/3 bg-white shadow-md transform transition-transform duration-300 hover:scale-105';
const imageClasses = 'mx-auto my-4 w-48 h-48 object-contain';
const textPrimaryClasses = 'text-primary font-bold';

const ProgramCard = ({ country, university, logoText, program, location, image }) => {
  return (
    <div className={cardClasses}>
      <h2 className={textPrimaryClasses}>{country}</h2>
      <img src={image} alt={`${university} logo`} className={imageClasses} />
      <p>{program}</p>
      <p className="font-bold">{location}</p>
    </div>
  );
};

const Country = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 ml-10 mr-10">
      <ProgramCard
        country="MALAYSIA"
        university="MSU"
        logoText="MSU"
        program="Final Year TOPUP to Bachelor of Biomedical Science (Hons) Degree"
        location="SRI LANKA | MALAYSIA"
        image="/images/msu.jpg"
      />
      <ProgramCard
        country="UNITED KINGDOM"
        university="Oxford Brookes"
        logoText="Oxford+Brookes"
        program="Final Year TOPUP to BSc (Hons) Biomedical Science"
        location="SRI LANKA | UK"
        image="/images/obu.jpg"
      />
      <ProgramCard
        country="AUSTRALIA"
        university="CQUniversity"
        logoText="CQUniversity"
        program="Transfer to Bachelor of Medical Laboratory Science"
        location="AUSTRALIA"
        image="/images/cqu.jpg"
      />
    </div>
  );
};

export default Country;
