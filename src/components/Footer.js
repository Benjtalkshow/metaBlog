import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className="bg-gray-100 w-full py-10 flex justify-center items-center">
        <footer>
          <div className="linkContainer flex justify-around gap-[5rem]">
            <div className="mr-10">
              <h1 className="font-bold">About</h1>
              <p className="text-primary mb-5">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore
                <br /> et dolore magna aliqua. Ut enim ad
                <br /> minim veniam
              </p>
              <div>
                <h1 className="font-bold">
                  Email:{" "}
                  <a
                    href="mailto:info@jstemplate.net"
                    className="text-primary font-normal"
                  >
                    {" "}
                    info@jstemplate.net
                  </a>
                </h1>
              </div>
              <div className="flex">
                <h1 className="font-bold mr-2">Phone:</h1>
                <p className="text-primary font-normal">880 123 456 789</p>
              </div>
            </div>
            <div className="quickLinks">
              <h1 className="font-bold">Quick Links</h1>
              <ul className="text-primary">
                {quickLinks.map((quickLink, index) => (
                  <Link key={index} to={quickLink.path} className="block py-2">
                    {quickLink.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="categories">
              <h1 className="font-bold">Categories</h1>
              <ul className="text-primary">
                {categories.map((category, index) => (
                  <Link key={index} to={category.path} className="block py-2">
                    {category.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="newletter bg-white shadow-md rounded-lg p-8 w-[350px] ml-10">
              <h1 className="font-bold text-center">Weekly Newsletter</h1>
              <p className="text-primary text-center">
                Get blog articles and offers via email
              </p>
              <form className="mt-5 flex-col flex">
                <input
                  placeholder="Your Email"
                  type="email"
                  className="outline-none border-primary p-2 mb-2 border-[1px] rounded focus:ring focus:border-badge"
                />
                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  className="bg-badge rounded py-2 text-white mt-2 cursor-pointer focus:ring"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
          <div className="border-t-[1px] border-t-gray-300 w-full mt-10 py-5">

          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
