import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Tag from "../components/Tag";
import ShortInfo from "../components/ShortInfo";
import Advert from "../components/Advert";
import { Spinner, formattedDate, thumbnail } from "../data/data";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Posts = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [recommended, setRecommended] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "posts");
        const data = await getDocs(collectionRef);
        const recommend = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRecommended(recommend);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Advert />
      <div className="flex justify-center items-center md:items-start gap-10 w-full flex-col md:flex-row">
        <div className="post mt-10 flex justify-center items-center flex-col p-3 md:px-0 w-full md:w-[40%]">
          {isLoading ? (
            <Spinner />
          ) : (
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
                      formattedDate={`Posted on ${
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
          )}
        </div>

        {/* Recommended div with fixed position */}
        <div className="recommended p-5 w-full md:w-1/3 mt-5 md:mt-10 shadow-md bg-gray-50">
          <h1 className="mb-5 text-badge text-xl">Recommended for you</h1>
          {recommended ? (
            <>
              {recommended
                .slice(0, 10)
                .reverse()
                .map((recommend) => (
                  <Link key={recommend.id} to={
                    window.location.pathname.includes(`/post/${postId}`)
                      ? `/post/${recommend.id}`
                      : `/post/${recommend.id}`
                  }
                  onClick={() => window.location.reload()}>
                    <h1
                      className="text-lg underline hover:text-badge mb-2"
                    >
                      {">"} {recommend.title}
                    </h1>
                  </Link>
                ))}
            </>
          ) : (
            <><p className="text-center text-badge">No recommended post</p></>
          )}
        </div>
      </div>
      <Advert />
    </div>
  );
};

export default Posts;
