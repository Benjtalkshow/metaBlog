import React from "react";

const Tag = ({ category, labelClassName, textColor }) => {
  return (
    <div>
      <label className={`tag italic p-2 ${textColor} rounded-lg ${labelClassName}`}>
        {category}
      </label>
    </div>
  );
};

export default Tag;
