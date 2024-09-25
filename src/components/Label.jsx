import React from "react";

const Label = ({ label, dataLabel }) => {
  return (
    <div className="flex items-start flex-col">
      <p className="text-primary font-bold">{label}</p>
      <p>{dataLabel}</p>
    </div>
  );
};

export default Label;
