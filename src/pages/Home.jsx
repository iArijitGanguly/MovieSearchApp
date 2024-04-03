import React from "react";
import MovieCard from "../components/MovieCard";
import useMovieList from "../hooks/useMovieList";

const Home = () => {
  const { movieList } = useMovieList("harry", "avengers", "batman");
  return (
    <div className="flex flex-wrap justify-evenly mt-12">
      {movieList.length > 0 &&
        movieList.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })}
    </div>
  );
};

export default Home;
