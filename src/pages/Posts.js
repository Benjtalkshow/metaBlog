import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import ShortInfo from "../components/ShortInfo";
import Advert from "../components/Advert";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/slice/authSlice";
import { formattedDate, thumbnail } from "../data/data";

const Posts = () => {
  const { id } = useParams();
  const allPosts = useSelector(selectPosts);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = allPosts.find((post) => post.id === id);
        setPost(posts);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [allPosts, id]);

  return (
    <div className="w-full">
      <Advert />
      <div className="mt-10 flex justify-center items-center flex-col px-2 md:px-0">
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
                <p className="text-badge">{id}</p>
              </h1>
              <ShortInfo textColorClass="text-gray-500"
              admin={"Admin"}
              formattedDate={`Posted on ${post.timestamp ? formattedDate(post.timestamp) : 'Unknown date'}`}
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
      </div>
      <Advert />
    </div>
  );
};

export default Posts;
