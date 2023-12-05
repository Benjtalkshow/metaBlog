import React from "react";
// import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import ShortInfo from "../components/ShortInfo";
import postImage from "../assets/post.png";
import postImage2 from "../assets/post1.png";
import Advert from "../components/Advert";

const post = `Traveling is an enriching experience that opens up new horizons,
exposes us to different cultures, and creates memories that last a
lifetime. However, traveling can also be stressful and overwhelming,
especially if you don't plan and prepare adequately. In this blog
article, we'll explore tips and tricks for a memorable journey and
how to make the most of your travels. One of the most rewarding
aspects of traveling is immersing yourself in the local culture and
customs. This includes trying local cuisine, attending cultural
events and festivals, and interacting with locals. Learning a few
phrases in the local language can also go a long way in making
connections and showing respect.`;

const Posts = () => {
  // const { id } = useParams();
  return (
    <div className="w-full">
      <Advert />
      <div className="mt-10 flex justify-center items-center flex-col px-2 md:px-0">
        <div className="px-2">
          <Tag
            textColor="text-white"
            category="Technology"
            labelClassName="bg-badge"
          />
          <h1 className="title font-bold text-black text-xl md:text-3xl mt-2 md:mt-5">
            The Impact of Technology on the Workplace:
            <br /> How Technology is Changing
          </h1>
          <ShortInfo textColorClass="text-gray-500" />
        </div>
        <div className="my-10">
          <img src={postImage} alt="post pic" width={700} height={600} />
        </div>
        <div className="">
        <p className="text-justify px-2 md:px-0 md:whitespace-pre-line">{post}</p>
        </div>
        <div className="my-10">
          <img src={postImage2} alt="post pic" width={700} height={600} />
        </div>
        <div className="">
        <p className="text-justify px-2 md:px-0 md:whitespace-pre-line">{post}</p>
        </div>
      </div>
      <Advert />
    </div>
  );
};

export default Posts;
