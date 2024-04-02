import React, { useEffect, useState } from "react";
import searchMovie from "../apis/omdb";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  const fetchDefaultMovies = async (...args) => {
    const urls = args.map((movieName) => searchMovie(movieName));
    try {
      const response = await axios.all(urls.map((url) => axios.get(url)));
      const movies = response.map((movie) => movie.data.Search);
      setMovieList([].concat(...movies));
    } catch (error) {}
  };

  useEffect(() => {
    fetchDefaultMovies("harry", "avengers", "batman");
  }, []);
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
