import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ Title, Year, Type, Poster, imdbID }) => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate(`/movie/${imdbID}`);
  };
  return (
    <div
      className="max-w-[30%] text-fontColor cursor-pointer mb-12 text-center flex flex-col border-[1px] border-solid border-white py-5 px-0 rounded-lg items-center bg-cardBackground"
      onClick={HandleClick}
    >
      <div>
        <img src={Poster} />
      </div>

      <div className="text-3xl font-mullish tracking-widest mt-8">
        <span>{Title}</span>
      </div>

      <div className="mt-4 text-xl tracking-wide">
        <span>Released in: {Year}</span>
      </div>

      <div className="mt-4 text-xl tracking-wide">
        <span>Type: {Type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
