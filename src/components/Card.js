import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { SET_POSTS } from "../redux/slice/authSlice";
import { formattedDate, Spinner, thumbnail } from "../data/data";
import ShortInfo from "./ShortInfo";
import Tag from "./Tag";
import AOS from "aos";

const Card = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const collectionRef = collection(db, "posts");

  useEffect(() => {
    AOS.init({ duration: 3000, offset: 200 });
    const fetchData = async () => {
      try {
        const data = await getDocs(collectionRef);
        const postData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPost(postData);
        dispatch(SET_POSTS(postData));
        console.log(postData);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <section className="mb-40 flex justify-center items-center flex-col">
      <div className="flex justify-center mb-5 w-full">
        <div className="w-[90%] font-bold text-lg md:text-xl">
          <h1 className="">Latest News</h1>
        </div>
      </div>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          {post.length >= 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center w-[90%]">
              {post.map((post) => (
                <Link to={`/post/${post.id}`} key={post.id}>
                  <div
                    className="card bg-white p-4 rounded-lg shadow-md border-2 border-gray-300"
                    data-aos="fade-up"
                  >
                    <img
                      src={post.file || thumbnail}
                      alt="post pics"
                      className="mb-5"
                      width={450}
                      height={`100px`}
                    />
                    <Tag
                      category={post.category}
                      labelClassName="bg-gray-50"
                      textColor="text-badge"
                    />
                    <h2 className="text-xl font-bold my-2 hover:text-badge">
                      {post.title}
                    </h2>
                    <ShortInfo
                      admin={post.author.name || "Admin"}
                      formattedDate={`Posted on ${post.timestamp ?
                        formattedDate(post.timestamp) : "Unknown date"
                      }`}
                      textColorClass="text-badge"
                    />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              <p className="font-bold text-lg text-badge">No Post Available</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Card;
