import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { toast } from "react-toastify";
import { IoTimeOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { selectIsLoggedIn } from "../redux/slice/authSlice";

import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { formattedDate, thumbnail } from "../data/data";
import { useSelector } from "react-redux";


const Comment = ({ postId }) => {
  const isLogin = useSelector(selectIsLoggedIn)
  const provider = new GoogleAuthProvider();
  const [commentText, setCommentText] = useState("");
  const [comment, setComment] = useState([]);
  const [commentUser, setCommentUser] =  useState(null);

  async function addCommentToFirestore(user, commentText) {
    const commentsRef = collection(doc(db, "posts", postId), "comments");
    const commentData = {
      userId: user.uid,
      userName: user.displayName,
      userPhotoURL: user.photoURL,
      commentText: commentText,
      likes: 0,
      timestamp: serverTimestamp(),
    };

    const commentId = `${user.uid}-${Date.now()}`;
    const commentRef = doc(commentsRef, commentId);
    try {
      await setDoc(commentRef, commentData);
      setCommentText("");
      console.log("Comment added successfully");
    } catch (error) {
      console.error("Error adding comment to Firestore:", error);
    }
  }

  const submitAndloginWithGoogle = async () => {
    try {
      if (commentText.trim() === "") {
        toast.warning("Please enter a comment before posting.");
        return;
      }

      const result = await signInWithPopup(auth, provider);
      const userDetails = result.user;
      setCommentUser(userDetails)
      toast.info("Comment posted!");
      await addCommentToFirestore(userDetails, commentText);
      console.log(userDetails);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const commentsRef = collection(db, `posts/${postId}/comments`);
        const querySnapshot = await getDocs(commentsRef);
        const commentsArray = [];
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const commentData = doc.data();
            const commentId = doc.id;
            commentsArray.push({ id: commentId, ...commentData });
          });
          setComment(commentsArray);
          console.log(commentsArray);
        } else {
          console.log("No comments in the subcollection!");
        }
      } catch (error) {
        console.error("Error fetching comments from Firebase:", error);
      }
    };
    fetchComment();
  }, []);

  

  const cancelComment = () => {
    if (commentText.trim() === "") {
      toast.warning("The comment is empty.");
      return;
    }
    setCommentText("");
  };

  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="bg-badge text-white p-2 inline-block">
            <h1 className="">COMMENT</h1>
          </div>
          <div className="flex flex-col comment-section">
            {comment.map((eachComment) => (
              <div className="userComment" key={eachComment.id}>
                <div className="bg-white p-2">
                  <div className="flex flex-row items-center">
                    <img
                      className="rounded-full"
                      src={eachComment.userPhotoURL || thumbnail}
                      width="40"
                      alt="Profile"
                    />
                    <div className="flex flex-col justify-start ml-2">
                      <span className="block font-bold name text-badge">
                        {eachComment.userName}
                      </span>
                      <span className="date text-black-50 flex items-center gap-2">
                        <IoTimeOutline />
                        {`${formattedDate(eachComment.timestamp)}`}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="comment-text">{eachComment.commentText}</p>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="flex flex-row text-sm">
                    <div className="like p-2 cursor-pointer">
                      <span className="ml-1 flex items-center gap-2">
                        <SlLike />
                        {`${eachComment.likes} Likes`}
                      </span>
                    </div>
                    <div className="like p-2 cursor">
                      <span className="ml-1">Share</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-light p-2">
              <div className="flex flex-row items-start">
                <img
                  className="commetImage rounded-full"
                  src={isLogin && commentUser?.photoURL ? commentUser.photoURL : 'https://i.imgur.com/RpzrMR2.jpg'}
                  width="40"
                  alt="Profile"
                />
                <textarea
                  className="ml-1 shadow-none textarea outline-none border-gray-300 border-2 w-[80%] focus:ring"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-2 text-right">
                <button
                  className="bg-badge text-white px-3 py-1"
                  type="button"
                  onClick={submitAndloginWithGoogle}
                >
                  Post comment
                </button>
                <button
                  className="border border-badge text-badge px-3 py-1 ml-1"
                  type="button"
                  onClick={cancelComment}
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
