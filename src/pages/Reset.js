import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { auth } from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        toast.success("Password reset link sent!!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        if(error.code === "auth/invalid-email"){
          toast.error("Not a valid email!!");
        } else {
          toast.error(error.code, errorMessage);
        }
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50 overflow-hidden">
      {isLoading && <Loader />}
      <div className="p-5 max-w-md w-full md:w-[400px] bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="font-bold text-lg text-badge text-center">
          Reset Password
        </h1>
        <form
          className="mt-5 flex-col flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Your Email"
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge w-full"
          />

          <button
            type="submit"
            className="bg-badge rounded py-2 text-white mt-2 cursor-pointer focus:ring w-full"
          >
            submit
          </button>

          <div className="mt-3 flex items-center justify-between w-full px-2">
            <Link to="/signup">
              <span className="text-primary hover:text-badge text-sm">
                - Sign Up
              </span>
            </Link>
            <Link to="/signin">
              <span className="text-primary hover:text-badge text-sm">
                - Sign In
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
