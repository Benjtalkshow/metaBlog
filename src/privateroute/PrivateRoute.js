import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../redux/slice/authSlice";

export const PrivateRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "chinedubenj@gmail.com") {
    return children;
  } else {
    return (
      <section className="h-screen w-full flex justify-center items-center bg-badge text-white">
        <div className=''>
          <h2>Permisision Denied.</h2>
          <p>This page can only be view by an admin user.</p>
          <br />
          <Link to='/'>
            <button className='bg-white text-black p-2 rounded-lg shadow-lg'>&larr; Back to Home</button>
          </Link>
        </div>
      </section>
    );
  }
};

export const PrivateLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "chinedubenj@gmail.com") {
    return children;
  } else {
    return null;
  }
};