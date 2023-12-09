import React from "react";
import profile from "../assets/profile.svg";

const ShortInfo = ({admin, formattedDate, textColorClass = "text-white" }) => {

  return (
    <div className="shortInfo flex items-center">
      <img src={profile} alt="profile" className="w-6 h-6 mr-2" />
      <p className={`${textColorClass} text-xs md:sm`}>
        {admin}
      </p>
      <p className={`${textColorClass} ml-2 md:ml-5 text-xs md:text-sm`}>
        {formattedDate}
      </p>
    </div>
  );
};

export default ShortInfo;
