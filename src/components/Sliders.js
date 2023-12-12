import React, { useEffect, useState } from "react";
// import HeaderImage from "../assets/bg.png";
import Tag from "./Tag";
import ShortInfo from "./ShortInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { formattedDate, thumbnail } from "../data/data";
import { Link } from "react-router-dom";



const Sliders = () => {
  const [slide, setSlide] = useState([]);
  const timer = 1000 * 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "posts");
        const data = await getDocs(collectionRef);
        const postData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSlide(postData);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        console.log("Slides playing");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: timer }}
        className="mySwiper"
      >
        {slide.slice(0, 5).reverse().map((slideX) => (
          <SwiperSlide key={slideX.id}>
            <section
              className="flex items-end p-2 sm:p-5 md:p-10 w-full h-[400px] md:h-[600px] relative overflow-hidden"
              style={{
                backgroundImage: `url(${slideX.file || thumbnail})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="z-10 absolute w-full md:w-1/2 mb-5 md:mb-0">
                <Tag
                  category={slideX.category}
                  labelClassName="bg-badge"
                  textColor="text-white"
                />
                <Link to={`post/${slideX.id}`}>
                  <h1 className="title font-bold text-white text-xl md:text-3xl mt-2 md:mt-5 hover:underline">
                    {slideX.title}
                  </h1>
                </Link>
                <ShortInfo
                  admin={slideX.author.name || "Admin"}
                  formattedDate={`${
                    slideX.timestamp
                      ? formattedDate(slideX.timestamp)
                      : "Unknown date"
                  }`}
                  textColorClass="text-white"
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #4B6BFB;
          }
        `}
      </style>
    </>
  );
};

export default Sliders;
