import React from "react";
import placeholder from "../assets/thumbnail.svg";
import { TailSpin } from "react-loader-spinner";
import banner  from "../assets/banner.png";


//image thumbnail
export const thumbnail  = placeholder;
export const advert = banner;

//format date appropriately
export const formattedDate = (newDateFormat) => {
  return newDateFormat.toDate().toLocaleDateString("en-US", {
     month: "long",
     day: "numeric",
     year: "numeric",
   });
 }

 //spinner with no background 
 export const Spinner = () => {
  return (
    <>
    <TailSpin
    height="60"
    width="60"
    color="#4B6BFB"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  </>
  )
 } 