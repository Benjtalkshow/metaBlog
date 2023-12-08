import React from "react";

const Tag = ({ category, labelClassName, textColor }) => {
  return (
    <div>
      <label className={`tag text-xs p-2 ${textColor} ${labelClassName}`}>
        {category}
      </label>
    </div>
  );
};

export default Tag;
