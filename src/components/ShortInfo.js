import React from "react";
import { useSelector } from "react-redux";
import { selectUname } from "../redux/slice/authSlice";
import profile from "../assets/profile.svg";

const ShortInfo = ({ textColorClass = "text-white" }) => {
  const isUserName = useSelector(selectUname);

  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="shortInfo flex items-center mt-2 md:mt-5">
      <img src={profile} alt="profile" className="w-6 h-6 mr-2" />
      <p className={`${textColorClass} text-sm md:text-base`}>
        {isUserName || "Anonymous"}
      </p>
      <p className={`${textColorClass} ml-2 md:ml-5 text-xs md:text-sm`}>
        {formattedDate}
      </p>
    </div>
  );
};

export default ShortInfo;
