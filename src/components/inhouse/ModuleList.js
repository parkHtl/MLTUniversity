import React from 'react';


const ModuleList = ({ modules }) => {
    
  return (
    <div className="py-4">
      <ul className="list-disc list-inside">
        {modules.map((module, index) => (
          <li key={index} className="">
            {module}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default ModuleList;
