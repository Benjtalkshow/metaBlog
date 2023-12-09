import React from "react";
import { useNavigate } from "react-router-dom";
import ShortInfo from "./ShortInfo";
import { formattedDate, thumbnail } from "../data/data";


const RecentPost = ({ recentPost, postId }) => {
  const navigate = useNavigate();

  const handleNavigate = (postIdx) => {
    const oldPath = window.location.pathname.includes(`/post/${postId}`);
    const newPath = postIdx;
    navigate(oldPath ? `/post/${newPath}` : `/post/${newPath}`);

    window.scrollTo(0, 0);
    setTimeout(() => {
      window.history.pushState(null, "", newPath);
      window.location.reload();
    }, 0);
  };

  return (
    <div className="recentPost p-5 w-full md:w-1/3 mt-5 md:mt-10 md:shadow-md bg-gray-50">
      <h1 className="mb-5 text-white bg-badge inline-block p-2">RECENT POST</h1>
      {recentPost ? (
        <>
          {recentPost
            .slice(0, 10)
            .reverse()
            .map((recent) => (
              <div
                key={recent.id}
                onClick={() => handleNavigate(recent.id)}
                className="cursor-pointer"
              >
                <div className="recentPostSection flex w-full border-b-gray-300 border-b-[1px] py-2 transition-transform hover:translate-x-2">
                  <div className="w-[80%]">
                    <h1 className="hover:text-badge">{recent.title}</h1>
                    <ShortInfo
                      textColorClass="text-gray-500"
                      formattedDate={`Posted on ${
                        recent.timestamp
                          ? formattedDate(recent.timestamp)
                          : "Unknown date"
                      }`}
                    />
                  </div>
                  <div>
                    <img
                      src={recent.file || thumbnail}
                      alt={recent.id}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            ))}
        </>
      ) : (
        <>
          <p className="text-center text-badge">No recent post</p>
        </>
      )}
    </div>
  );
};

export default RecentPost;
