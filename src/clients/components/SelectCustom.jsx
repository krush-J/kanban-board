import React from "react";

const SelectCustom = ({ setSelected, options, selected }) => {
  return (
    <select
      style={{
        padding: "8px",
        borderRadius: "5px",
        outline: "none",
        background: "#fefeff",
      }}
      value={selected}
      onChange={(event) => setSelected(event.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectCustom;
