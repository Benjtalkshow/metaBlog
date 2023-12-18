import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoBlue.svg";
import { toast } from "react-toastify";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "" },
    { name: "Blog", path: "/" },
    { name: "Archived", path: "" },
    { name: "Author", path: "/author" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "Lifestyle", path: "" },
    { name: "Technology", path: "" },
    { name: "Travel", path: "" },
    { name: "Business", path: "" },
    { name: "Economy", path: "" },
    { name: "Sports", path: "" },
  ];

  const terms = [
    { name: "Terms of Use", path: "" },
    { name: "|", path: "" },
    { name: "Privacy Policy", path: "" },
    { name: "|", path: "/signin" },
    { name: "Cookie Policy", path: "" },
  ];

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@") && email.includes(".com")) {
      toast.success(`${email} subscribed`);
      setEmail("");
    } else if (!email.includes("@") && !email.includes(".com")){
      toast.error("Not  a valid email");
    } else {
      toast.warning("Email cannot be empty!!");
    }
  };

  return (
    <footer>
      <div className="bg-gray-100 py-10 px-2 flex flex-col">
        <div className="linkContainer flex flex-wrap gap-5 justify-start min-[230px]:justify-evenly mb-10">
          <div className="about">
            <h1 className="font-bold">About</h1>
            <p className="text-primary mb-5">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore
              <br /> et dolore magna aliqua. Ut enim ad
              <br /> minim veniam
            </p>
            <div className="flex flex-col md:flex-row cursor-pointer hover:text-badge">
              <h1 className="font-bold mr-2">Email:</h1>
              <a
                href="mailto:chinedubenj@gmail.com"
                className="text-primary font-normal"
              >
                chinedubenj@gmail.com
              </a>
            </div>
            <div className="flex flex-col md:flex-row cursor-pointer hover:text-badge">
              <h1 className="font-bold mr-2">Phone:</h1>
              <p className="text-primary font-normal">000 000 000 00</p>
            </div>
          </div>
          <div className="quickLinks">
            <h1 className="font-bold">Quick Links</h1>
            <ul className="text-primary">
              {quickLinks.map((quickLink, index) => (
                <Link
                  key={index}
                  to={quickLink.path}
                  className="block py-2 transition-transform hover:text-badge hover:translate-x-2"
                >
                  {quickLink.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="categories">
            <h1 className="font-bold">Categories</h1>
            <ul className="text-primary">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="block py-2 transition-transform hover:text-badge hover:translate-x-2"
                >
                  {category.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="newletter max-w-md w-full md:w-[300px] bg-white shadow-md rounded-lg p-5">
            <h1 className="font-bold text-center">Weekly Newsletter</h1>
            <p className="text-primary text-center">
              Get blog articles and offers via email
            </p>
            <form className="mt-5 flex-col flex" onSubmit={handleSubmit}>
              <input
                placeholder="Your Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge"
              />
              <button
                type="submit"
                className="bg-badge rounded py-2 text-white mt-2 cursor-pointer focus:ring"
              >
                submit
              </button>
            </form>
          </div>
        </div>
        <div className="border-t-2 border-t-gray-300">
          <div className="linkContainer flex flex-wrap justify-around gap-x-[14rem] items-center py-5">
            <div className="logo flex gap-x-2 mb-5">
              <Link to="/">
                <img src={logo} alt="logo" className="w-5 md:w-10" />
              </Link>
              <div>
                <h1 className="text-black text-sm md:text-md">
                  <Link to="/">
                    Meta
                    <span className="text-black font-extrabold text-md md:text-xl">
                      Blog
                    </span>
                  </Link>
                </h1>
                <p>© Nnaji Benjamin 2023. All Rights Reserved.</p>
              </div>
            </div>
            <div className="terms">
              <ul>
                {terms.map((term, index) => (
                  <Link
                    key={index}
                    to={term.path}
                    className="text-primary hover:text-badge px-2"
                  >
                    {term.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
