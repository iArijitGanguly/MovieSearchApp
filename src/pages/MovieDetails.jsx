import React from "react";
import { useParams } from "react-router-dom";
import useFetchMovie from "../hooks/useFetchMovie";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie } = useFetchMovie(id);

  return (
    <div className="w-full h-screen">
      <div className="flex justify-around items-center mt-16">
        {movie && (
          <MovieCard
            Title={movie.Title}
            Year={movie.Year}
            Type={movie.Type}
            Poster={movie.Poster}
            imdbID={movie.imdbID}
          />
        )}

        {movie && (
          <div className="text-textNav text-2xl flex flex-col gap-y-8 font-mullish basis-[40%]">
            <div>Plot: {movie.Plot}</div>
            <div>Actors: {movie.Actors}</div>
            <div>
              Genre:{" "}
              {movie.Genre.split(",").map((genre) => {
                return (
                  <span
                    key={genre}
                    className="border-[1px] border-solid border-dullBlue text-[#fbfbfb] rounded-3xl py-3 px-5 bg-dullBlue mr-4"
                  >
                    {genre}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
