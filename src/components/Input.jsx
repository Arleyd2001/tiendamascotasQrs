import React from "react";

const Input = ({ label, name, handleChange, value }) => {
  return (
    <>
      <div className="flex flex-col items-start  ">
        <p className="font-semibold ml-1">{label}</p>
        <input
          type="text"
          name={name}
          onChange={handleChange}
          className="mt-2 input w-full input-bordered"
          value={value}
        />
      </div>
    </>
  );
};

export default Input;
