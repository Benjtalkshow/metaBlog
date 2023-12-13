import React, { useEffect } from "react";
import { profilePicture } from "../data/data";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import AOS from "aos";
import { Link } from "react-router-dom";

const socials = [
  {
    name: "Facebook",
    icon: facebook,
    link: "https://web.facebook.com/Benjtalksho",
  },
  { name: "Twitter", icon: twitter, link: "https://github.com/Benjtalkshow" },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.linkedin.com/in/nnaji-benjamin-542773182/",
  },
  { name: "Youtube", icon: youtube },
];

const Bio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, offset: 200 });
  }, []);

  return (
    <div className="bio w-full md:w-1/2 flex justify-center items-center flex-col gap-4 my-10 px-2 md:px-0">
      <div className="profile flex items-center gap-3">
        <img src={profilePicture} alt="profil pic" width={60} />
        <div>
          <h1 className="font-bold text-lg">Nnaji Benjamin</h1>
          <p className="text-gray-400">Admin & Developer</p>
        </div>
      </div>
      <p className="description md:whitespace-pre-line text-center">
        Meet Nnaji Benjamin, a passionate developer  with a love for frontend technologies and frameworks. 
        Benjamin holds a degree in Computer Science and Robotics and
        has spent years working in the tech industry, gaining a deep
        understanding of the impact technology has on our lives.
      </p>
      <div className="socials flex gap-2">
        {socials.map((social, index) => (
          <Link to={social.link} key={index} target="_blank" rel="noopener noreferrer">
            <img
              src={social.icon}
              alt={`social icon ${social.name}`}
              className="transition-transform hover:text-badge hover:translate-y-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bio;
