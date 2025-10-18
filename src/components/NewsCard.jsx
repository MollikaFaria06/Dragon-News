import React from "react";
import { FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    others,
  } = news;

  
  

  return (
    <div className="card bg-base-100 shadow-md  rounded-2xl mb-6">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-3">

        <FaShareAlt/>
        <FaRegBookmark></FaRegBookmark>
             
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-lg font-bold leading-snug hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3 text-gray-600 text-sm">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-primary font-semibold cursor-pointer">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 mt-2 border-t text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
