import React from 'react';

const ModuleList = ({ modules }) => {
  return (
    <div className="py-2 md:py-4">
      <ul className="list-disc list-inside">
        {modules.map((module, index) => (
          <li key={index} className="text-sm md:text-base">
            {module}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
