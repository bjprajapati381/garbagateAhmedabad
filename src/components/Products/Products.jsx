import React from "react";
import Img1 from "../../assets/women/1.jpeg";
import Img2 from "../../assets/women/2.jpeg";
import Img3 from "../../assets/women/3.jpg";
import Img4 from "../../assets/women/4.jpg";
import Img5 from "../../assets/women/5.jpeg";

import { FaStar } from "react-icons/fa6";

const events = [
  {
    id: 1,
    img: Img1,
    title: "Traditional Garba Night",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Navratri Dance Extravaganza",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Dandiya Raas",
    rating: 4.7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Garba Beats with DJ",
    rating: 4.4,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Midnight Garba Bash",
    rating: 4.5,
    aosDelay: "800",
  },
];

const TopRatedEvents = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Discover
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Rated Garba Events
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Join the most popular Garba events this Navratri season.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {events.map((event) => (
              <div
                data-aos="fade-up"
                data-aos-delay={event.aosDelay}
                key={event.id}
                className="space-y-3"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{event.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Events button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedEvents;
