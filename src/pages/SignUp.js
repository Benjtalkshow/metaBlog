import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (email && password && confirmPassword) {
      setTimeout(() => {
        toast.success(`Email: ${email}, Password: ${password}`);
        setIsLoading(false);
      }, 2000); 
  
    } else {
      toast.error("Email, Password, or Confirm Password is empty!!");
      setIsLoading(false); 
    }
  };
  
 
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
      {!isLoading ? (
 <div className="p-5 max-w-md w-full md:w-[400px] bg-white shadow-md rounded-lg overflow-hidden">
 <h1 className="font-bold text-lg text-badge text-center">Register</h1>
 <p className="text-primary text-center">Register as an Admin</p>
 <form
   className="mt-5 flex-col flex justify-center items-center"
   onSubmit={handleSubmit}
 >
   <div className="flex justify-start items-center w-full">
     <label className="text-badge block">Email</label>
   </div>
   <input
     placeholder="Email"
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
     Already Registered?{" "}
     <Link to="/signin">
       <span className="text-badge">Sign In</span>
     </Link>
   </p>
 </form>
</div>
      ) : (
        <div 
        className="overshadow w-full h-screen bg-black bg-opacity-10 flex justify-center items-center"
      >
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
      )}
     
    </div>
  );
};

export default SignUp;
