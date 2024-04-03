import axios from "axios";
import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";

function useMovieList(...args) {
    const [movieList, setMovieList] = useState([]);

    const fetchDefaultMovies = async (...args) => {
      const urls = args.map((movieName) => searchMovie(movieName));
      try {
        const response = await axios.all(urls.map((url) => axios.get(url)));
        if(response[0].data.Error) {
            setMovieList([]);
        }
        else{
            const movies = response.map((movie) => movie.data.Search);
            setMovieList([].concat(...movies));
        }
      } catch (error) {}
    };
  
    useEffect(() => {
      fetchDefaultMovies(...args);
    }, [...args]);

    return {movieList};
}

export default useMovieList;