import React from "react";
import ShortInfo from "./ShortInfo";
import Tag from "./Tag";
import { cardData } from "../data/data";

const Card = () => {

  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center w-[90%]">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-300"
          >
            <img src={card.image} alt="post pics" className="w-full mb-5" />
            <Tag
              category="Technology"
              labelClassName="bg-gray-50"
              textColor="text-badge"
            />
            <h2 className="text-xl font-bold my-2">{card.title}</h2>
            <ShortInfo textColorClass="text-black" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
