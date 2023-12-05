// CardContainer Component
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { SET_POSTS } from "../redux/slice/authSlice";
import { thumbnail } from "../data/data";


const CardContainer = () => {
  const [post, setPost] = useState([]);
  const dispatch  = useDispatch();
  const collectionRef = collection(db, "posts");
  useEffect(() => {
    const mapPost = async () => {
      const data = await getDocs(collectionRef);
      const postData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPost(postData)
      dispatch(SET_POSTS(postData))
    };
    mapPost();
  },[dispatch, collectionRef]);

  return (
    <section className="mb-40 flex justify-center items-center flex-col">
      <div className="flex justify-center mb-5 w-full">
        <div className="w-[90%] font-bold text-lg md:text-xl">
          <h1 className="">Latest News</h1>
        </div>
      </div>
      {post.length >= 2 ?
         (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center w-[90%]">
         {post.map((card) => (
           <Link to={`/post/${card.id}`}>
             <Card key={card.id} cardImage={card.file || thumbnail} cardTitle={card.title} />
           </Link>
         ))}
       </div>) : (
        <div><p className="font-bold text-lg text-badge">No Post Available</p></div>
       )   
    }
    </section>
  );
};

export default CardContainer;
