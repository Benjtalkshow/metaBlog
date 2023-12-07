import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import ShortInfo from "../components/ShortInfo";
import Advert from "../components/Advert";
import { Spinner, formattedDate, thumbnail } from "../data/data";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Posts = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRef = doc(db, "posts", postId);
        const postDoc = await getDoc(postRef);
        if (postDoc.exists()) {
          setPost({ id: postDoc.id, ...postDoc.data() });
        } else {
          console.log("No such document!");
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching document from Firebase:", error);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="w-full">
      <Advert />
      <div className="mt-10 flex justify-center items-center flex-col px-2 md:px-0">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {post ? (
              <>
                <div className="px-2">
                  <Tag
                    category={post.category}
                    labelClassName="bg-badge"
                    textColor="text-white"
                  />
                  <h1 className="title font-bold text-black text-xl md:text-3xl mt-2 md:mt-5">
                    {post.title}
                  </h1>
                  <ShortInfo
                    textColorClass="text-gray-500"
                    admin={post ? post.author?.name : "Admin"}
                    formattedDate={`Posted on ${
                      post.timestamp
                        ? formattedDate(post.timestamp)
                        : "Unknown date"
                    }`}
                  />
                  {console.log(post)}
                </div>
                <div className="my-10">
                  <img
                    src={post.file || thumbnail}
                    alt="post pic"
                    width={700}
                    height={600}
                  />
                </div>
                <div className="">
                  <p className="text-justify px-2 md:px-0 md:whitespace-pre-line">
                    {post.content}
                  </p>
                </div>
                <div className="my-10">
                  <img
                    src={post.file || thumbnail}
                    alt="post pic"
                    width={700}
                    height={600}
                  />
                </div>
                <div className="">
                  <p className="text-justify px-2 md:px-0 md:whitespace-pre-line">
                    {post.content}
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-badge text-center">No Post Available</h1>
              </>
            )}
          </>
        )}
      </div>
      <Advert />
    </div>
  );
};

export default Posts;
