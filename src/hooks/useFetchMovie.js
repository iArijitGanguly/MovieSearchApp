import { useEffect, useState } from "react";
import { searchMovieById } from "../apis/omdb";
import axios from "axios";

function useFetchMovie(imdbID) {
    const [movie, setMovie] = useState(null);

    const fetchMovie = async () => {
        try {
            const response = await axios.get(searchMovieById(imdbID));
            setMovie(response.data);
        } catch (error) {
            console.log("Something went wrong!!!");
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [imdbID]);

    return { movie };
}

export default useFetchMovie;