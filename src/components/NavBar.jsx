import React, { useContext, useRef, useState } from "react";
import useMovieList from "../hooks/useMovieList";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const resultListRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleMouseDown = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };
  function updateTheme() {
    if(theme == "dark") {
      setTheme("light");
      localStorage.setItem("app-theme", "light");
    }
    else {
      setTheme("dark");
      localStorage.setItem("app-theme", "dark");
    }
  }
  return (
    <div className="flex justify-around border-2 border-solid border-dullBlue bg-dullBlue p-4 items-center">
      <h1 className="font-bebas text-4xl tracking-wider text-[#fbfbfb]">
        Movie Base
      </h1>
      <div className="basis-4/6 relative">
        <input
          type="text"
          placeholder="What movie you are thinking about..."
          onFocus={() => (resultListRef.current.style.display = "block")}
          onBlur={() => (resultListRef.current.style.display = "none")}
          onChange={useDebounce((e) => setSearchTerm(e.target.value))}
          className="w-full h-12 p-2 bg-lightPrimeGray text-textNav focus:outline-none rounded-md"
        />

        <div
          className="max-h-96 overflow-y-scroll absolute hidden bg-lightPrimeGray text-textNav w-full rounded-lg border-[1px] border-solid border-dullBlue"
          ref={resultListRef}
        >
          <div className="text-xl p-4 border-b-[1px] border-solid border-b-black">
            Searching results for {searchTerm}.....
          </div>
          {movieList.length > 0 &&
            movieList.map((movie) => {
              return (
                <div
                  key={movie.imdbID}
                  className="text-xl p-4 border-b-[1px] border-solid border-b-black cursor-pointer hover:bg-primeBlue"
                  onMouseDown={() => handleMouseDown(movie.imdbID)}
                >
                  {movie.Title}
                </div>
              );
            })}
        </div>
      </div>

      <div onClick={updateTheme}>
        {theme == "dark" ? (
          <IoSunnySharp fontSize="2.5rem" className="cursor-pointer text-textNav" />
        ) : (
          <FaRegMoon fontSize="2.5rem" className="cursor-pointer text-textNav"/>
        )}
      </div>
    </div>
  );
};

export default NavBar;
