import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.svg";
import styles from "../styles/ActiveLink.module.css";


const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
const stopPropagation = (e) => {
    e.stopPropagation();
}

const activeLink = ({isActive}) => 
(isActive ? `${styles.activeLink}` : "");


  return (
    <>
      <header className="header py-3 px-3 flex justify-between items-center w-full shadow">
        <Link to="/">
          <div className="logo flex gap-x-2">
            <img src={logo} alt="logo" />
            <h1 className="text-black">
              Meta
              <span className="text-black font-extrabold text-xl">Blog</span>
            </h1>
          </div>
        </Link>
        <nav className="navbar hidden md:flex">
          <ul className="flex gap-x-8 text-primary">
            <li>
              <NavLink to="/" className={activeLink}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/author">Author</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/siginin">SignIn</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </nav>
        <div className="gap-x-8 items-center hidden md:flex">
          <div className="input-holder bg-slate-100 flex items-center p-2 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent"
            />
            <FaSearch size={16} className="text-primary" />
          </div>
        </div>
        {!hamburger ? (
          <FaBars
            size={20}
            className="text-primary block md:hidden"
            onClick={handleHamburger}
          />
        ) : (
          <AiOutlineClose
            size={20}
            className="text-primary block md:hidden"
            onClick={handleHamburger}
          />
        )}
      </header>
      {/* sidebar | mobile view */}
      <div onClick={handleHamburger}
        className={`overshadow w-full h-screen bg-black bg-opacity-20 block md:hidden transform ${
          hamburger ? "translate-x-0" : "-translate-x-full"
        } 
        transition-transform duration-300 ease-in-out`}
      >
        <nav
          className={`navbav w-[250px] md:w-auto transform ${
            hamburger ? "translate-x-0" : "-translate-x-full"
          } 
        transition-transform duration-300 ease-in-out shadow h-screen flex md:hidden flex-col items-center p-8 border-t-2
        absolute bg-white`}
        >
          <div className="flex gap-x-8 items-center">
            <div className="input-holder bg-slate-100 flex items-center p-2 rounded-lg w-48 md:w-64 overflow-hidden" onClick={stopPropagation}>
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-48 md:w-64"
              />
            </div>
          </div>
          <ul className="gap-y-8 text-primary flex flex-col mt-10">
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/author">Author</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/siginin">SignIn</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
