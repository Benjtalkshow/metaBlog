import React, { useEffect } from "react";
import ShortInfo from "./ShortInfo";
import Tag from "./Tag";
import AOS from "aos";

const Card = ({ cardImage, cardTitle }) => {
  useEffect(() => {
    AOS.init({ duration: 3000, offset: 200 });
  }, []);

  return (
    <section>
      <div>
        <div
          className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-300"
          data-aos="fade-up"
        >
          <img src={cardImage} alt="post pics" className="mb-5" width={450} height={`100px`} />
          <Tag
            category="Technology"
            labelClassName="bg-gray-50"
            textColor="text-badge"
          />
          <h2 className="text-xl font-bold my-2 hover:text-badge">{cardTitle}</h2>
          <ShortInfo textColorClass="text-black" />
        </div>
      </div>
    </section>
  );
};

export default Card;
