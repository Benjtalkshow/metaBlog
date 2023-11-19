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
      <div className="bg-gray-100 w-full flex justify-center mt-10">
        <footer>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
