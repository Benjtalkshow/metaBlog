import React from "react";

const Error404 = () => {
  const errorMessage = "Oops! That page can’t be found";
  return (
    <>
    <h1 className="text-center font-bold text-lg md:text-xl text-badge">Error 404 Page</h1>
    <p className="text-center font-bold text-lg md:text-xl text-badge">{errorMessage}</p>
    </>
  );
};

export default Error404;
