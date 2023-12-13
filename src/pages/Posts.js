import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tag from "../components/Tag";
import ShortInfo from "../components/ShortInfo";
import Advert from "../components/Advert";
import { Spinner, formattedDate, thumbnail } from "../data/data";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import RecentPost from "../components/RecentPost";
import Comment from "../components/Comment";

const Posts = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [recentPost, setRecentPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetching a document based on id
    const fetchPost = async () => {
      try {
        const postRef = doc(db, "posts", postId);
        const postDoc = await getDoc(postRef);
        if (postDoc.exists()) {
          setPost({ id: postDoc.id, ...postDoc.data() });
        } else {
          console.log("No such document!");
          navigate("/");
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching document from Firebase:", error);
        navigate("/*");
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

  useEffect(() => {
    // fetching all the document from post collection
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "posts");
        const data = await getDocs(collectionRef);
        const recent = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRecentPost(recent);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Advert />
      {isLoading ? (
        <div className="w-full flex justify-center items-center h-1/5">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-center items-center md:items-start gap-10 w-full flex-col md:flex-row">
          <div className="post mt-10 flex justify-center items-center flex-col p-3 md:px-0 w-full md:w-[40%]">
            <>
              {post ? (
                <>
                  <div className="w-full">
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
                      formattedDate={`${
                        post.timestamp
                          ? formattedDate(post.timestamp)
                          : "Unknown date"
                      }`}
                    />
                  </div>
                  <div className="my-10">
                    <img
                      src={post.file || thumbnail}
                      alt="post pic"
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
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
            {/* Removed unnecessary commented-out closing brace */}
            <Comment postId={postId} />
          </div>

          {/* Recent post */}
          <RecentPost recentPost={recentPost} postId={postId} />
        </div>
      )}
      <Advert />
    </div>
  );
};

export default Posts;
