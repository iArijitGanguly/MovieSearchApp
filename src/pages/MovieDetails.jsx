import React from "react";
import { useParams } from "react-router-dom";
import useFetchMovie from "../hooks/useFetchMovie";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie } = useFetchMovie(id);

  return (
    <div>
      {movie && (
        <MovieCard
          Title={movie.Title}
          Year={movie.Year}
          Type={movie.Type}
          Poster={movie.Poster}
        />
      )}
    </div>
  );
};

export default MovieDetails;
