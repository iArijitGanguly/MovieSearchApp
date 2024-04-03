import React, { useRef, useState } from "react";
import useMovieList from "../hooks/useMovieList";
import useDebounce from "../hooks/useDebounce";

const NavBar = () => {
  const resultListRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);
  return (
    <div className="flex justify-around border-2 border-solid border-dullBlue bg-dullBlue text-textNav p-4 items-center">
      <h1 className="font-bebas text-4xl tracking-wider">Movie Base</h1>
      <div className="basis-4/6 relative">
        <input
          type="text"
          placeholder="What movie you are thinking about..."
          onFocus={() => (resultListRef.current.style.display = "block")}
          onBlur={() => (resultListRef.current.style.display = "none")}
          onChange={useDebounce((e) => setSearchTerm(e.target.value))}
          className="w-full h-12 p-2 bg-lightPrimeGray focus:outline-none rounded-md"
        />

        <div
          className="max-h-96 overflow-y-scroll absolute hidden bg-textNav text-black w-full rounded-lg border-[1px] border-solid border-primeBlue"
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
                  className="text-xl p-4 border-b-[1px] border-solid border-b-black cursor-pointer"
                >
                  {movie.Title}
                </div>
              );
            })}
        </div>
      </div>

      <div>Theme</div>
    </div>
  );
};

export default NavBar;
