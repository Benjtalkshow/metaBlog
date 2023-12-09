import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Comment = () => {
  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="bg-badge text-white p-2 inline-block">
            <h1 className="">COMMENT</h1>
          </div>
          <div className="flex flex-col comment-section">
            <div className="bg-white p-2">
              <div className="flex flex-row items-center">
                <img
                  className="rounded-full"
                  src="https://i.imgur.com/RpzrMR2.jpg"
                  width="40"
                  alt="Profile"
                />
                <div className="flex flex-col justify-start ml-2">
                  <span className="block font-bold name">Marry Andrews</span>
                  <span className="date text-black-50">
                    Shared publicly - Jan 2020
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="comment-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="bg-white">
              <div className="flex flex-row text-sm">
                <div className="like p-2 cursor-pointer">
                  <span className="ml-1">0 Likes</span>
                </div>
                <div className="like p-2 cursor">
                  <span className="ml-1">Comment</span>
                </div>
                <div className="like p-2 cursor">
                  <span className="ml-1">Share</span>
                </div>
              </div>
            </div>
            <div className="bg-light p-2">
              <div className="flex flex-row items-start">
                <img
                  className="rounded-full"
                  src="https://i.imgur.com/RpzrMR2.jpg"
                  width="40"
                  alt="Profile"
                />
                <textarea className="ml-1 shadow-none textarea outline-none border-gray-300 border-2 w-[80%] focus:ring "></textarea>
              </div>
              <div className="mt-2 text-right">
                <button className="bg-badge text-white px-3 py-1" type="button">
                  Post comment
                </button>
                <button
                  className="border border-badge text-badge px-3 py-1 ml-1"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
