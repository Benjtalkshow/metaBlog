import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logoBlue.svg";
import styles from "../../styles/ActiveLink.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin from "../hidelinks/hiddenLinks";
import { PrivateLink } from "../../privateroute/PrivateRoute";
import Search from "./Search";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [uName, setuName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // TO HANDLE HAMBURGER MENU
  const handleHamburger = () => {
    setHamburger(!hamburger);
    if (!hamburger) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };
  
  // TO SET ACTIVE PAGE LINK AND SELECT STATE
  const activeLink = ({ isActive }) => (isActive ? `${styles.activeLink}` : "");

  // TO SET LOGGOUT
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully Logged Out!!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // To track the state of a logged in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = user.email.split("@")[0];
        const capitalizeUsername =
          username.charAt(0).toUpperCase() + username.slice(1);
        const isAdmin = user.email === "chinedubenj@gmail.com";
        setuName(capitalizeUsername);
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            uName: capitalizeUsername,
            userId: user.uid,
            isAdmin: isAdmin,
          })
        );
      } else {
        setuName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [uName, dispatch]);

  return (
    <>
      <header className="header py-5 px-3 flex justify-between items-center w-full shadow">
        <Link to="/">
          <div className="logo flex gap-x-2">
            <img src={logo} alt="logo" className="w-5 md:w-10" />
            <h1 className="text-black text-sm md:text-md">
              Meta
              <span className="text-black font-extrabold text-md md:text-xl">
                Blog
              </span>
            </h1>
          </div>
        </Link>
        <nav className="navbar hidden md:flex">
          <ul className="flex gap-x-8 text-primary">
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/author" className={activeLink}>
                Author
              </NavLink>
            </li>
            <li>
              <Link>
                Pages
              </Link>
            </li>
            <ShowOnLogin>
              <li>
                <NavLink className={`text-badge`}>{`Hi, ${uName}`}</NavLink>
              </li>
            </ShowOnLogin>
            <PrivateLink>
              <li>
                <NavLink to="/admin" className={activeLink}>
                  Admin
                </NavLink>
              </li>
            </PrivateLink>
            <ShowOnLogin>
              <li>
                <NavLink to="/" onClick={logOut}>
                  LogOut
                </NavLink>
              </li>
            </ShowOnLogin>
          </ul>
        </nav>
        <div className="gap-x-8 items-center hidden md:flex">
          <Search />
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
      <div
        onClick={handleHamburger}
        className={`overshadow w-full h-[100%] z-50 absolute bg-black bg-opacity-60 block md:hidden transform ${
          hamburger ? "translate-x-0" : "-translate-x-full"
        } 
        transition-transform duration-300 ease-in-out`}
      >
        <nav
          className={`navbav w-[250px] md:w-auto transform ${
            hamburger ? "translate-x-0" : "-translate-x-full"
          } 
        transition-transform duration-300 ease-in-out shadow h-[100%] flex md:hidden flex-col items-center p-8 border-t-2
        absolute bg-white`}
        >
          <ul className="gap-y-8 text-primary flex flex-col mt-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/author">Author</NavLink>
            </li>
            <ShowOnLogin>
              <li>
                <NavLink className={`text-badge`}>{`Hi, ${uName}`}</NavLink>
              </li>
            </ShowOnLogin>
            <PrivateLink>
              <li>
                <NavLink to="/admin" className={activeLink}>
                  Admin
                </NavLink>
              </li>
            </PrivateLink>
            <ShowOnLogin>
              <li>
                <NavLink to="/" onClick={logOut}>
                  LogOut
                </NavLink>
              </li>
            </ShowOnLogin>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
