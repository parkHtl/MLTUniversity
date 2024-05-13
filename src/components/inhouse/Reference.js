import React from "react";

export default function Reference() {
  return (
    <div className="mt-10">
      <h2 className="px-5 py-5 text-center font-bold text-2xl">
        REFERENCE CORPORATE CUSTOMERS
      </h2>
      <p className="px-5 py-5 text-center text-gray-800">
        Park Hospitals | Asiri Hospitals | Golden Key Hospitals | Prarthana
        Fertility Center | Sri Lanka Navy | Neptune Rehabilitation | Siri Sanda
        Hospitals
      </p>

      <div className="px-5 py-1 flex flex-wrap justify-center gap-8 rounded-3xl">
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoou6csIy1BanMM16RATXB2n2kJ1sMh_GoxoKeFweM_Q&s"
            alt="Park Hospitals"
            className="w-full h-full"
          />
        </div>
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/f6/Asiri_Hospital_Holdings_logo.png"
            alt="Asiri Hospitals"
            className="w-full h-full"
          />
        </div>
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSln3sitQsqE-FIjf3C4ovE8IHV_h-BSbU1ZUPQphtZAA&s"
            alt="Golden Key Hospitals"
            className="w-full h-full"
          />
        </div>
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://rainbowpages.lk/uploads/listings//logo/p/prarthanaivf.jpg"
            alt="Golden Key Hospitals"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="px-5 py-1 flex flex-wrap justify-center gap-8 rounded-3xl">
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://i0.wp.com/sirisandahospitals.com/wp-content/uploads/2023/02/cropped-Lab-and-Phamacu-Logo.png?fit=500%2C390&ssl=1"
            alt="Siri Sanda Hospitals"
            className="w-full h-full"
          />
        </div>
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/66/Sri_Lanka_Naval_Seal.png"
            alt="Sri Lanka Navy"
            className="w-full h-full"
          />
        </div>
        <div className="w-[150px] h-[150px] flex-shrink-0 hover:scale-110 transform transition duration-500 ease-in-out">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATdVabEev4Tn_rSaJTznDyz9xFAKygVqtGoCDsBsmHg&s"
            alt="Neptune Rehabilitation"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
