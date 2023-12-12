import React from "react";
import { TailSpin } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className="overshadow w-full h-screen bg-black bg-opacity-80 flex justify-center items-center absolute">
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
    </div>
  );
};

export default Loader;
