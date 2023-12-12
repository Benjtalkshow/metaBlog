import React from "react";
import profile from "../assets/profile.svg";
import { IoTimeOutline } from "react-icons/io5";


const ShortInfo = ({admin, formattedDate, textColorClass = "text-white" }) => {

  return (
    <div className="shortInfo flex items-center">
      <img src={profile} alt="profile" className="w-6 h-6 mr-2" />
      <p className={`${textColorClass} text-xs md:sm`}>
        {admin}
      </p>
      <div className="flex items-center ml-2">
        <IoTimeOutline className="mr-1 text-badge"/>
      <p className={`${textColorClass} md:ml-5 text-xs md:text-sm`}>
        {formattedDate}
      </p>
      </div>
    </div>
  );
};

export default ShortInfo;
