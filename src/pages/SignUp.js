import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setTimeout(() => {
        toast.error(`Password: ' ${confirmPassword} ' do not match!!`);
        setIsLoading(false);
      }, 2000);
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        toast.success("Registration Successful");
        navigate("/signin");
      })
      .catch((error) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50 overflow-hidden">
      {isLoading && <Loader />}
      <div className="p-5 max-w-md w-full md:w-[400px] bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="font-bold text-lg text-badge text-center">Register</h1>
        <p className="text-primary text-center">Register As Admin</p>
        <form
          className="mt-5 flex-col flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Email</label>
          </div>
          <input
            placeholder="Email"
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge w-full"
          />
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Password</label>
          </div>
          <input
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge w-full"
          />
          <div className="flex justify-start items-center w-full">
            <label className="text-badge block">Confirm Password</label>
          </div>
          <input
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="outline-none border-primary p-2 w-full mb-2 border-[1px] rounded focus:ring focus:border-badge"
          />
          <button
            type="submit"
            className="bg-badge rounded py-2 text-white mt-2 cursor-pointer focus:ring w-full"
          >
            submit
          </button>

          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/siginin">
              <span className="text-badge">Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
