import React, { useRef } from "react";

const NavBar = () => {

  const resultListRef = useRef(null);
  return (
    <div className="flex justify-between border-2 border-solid border-dullBlue bg-dullBlue text-textNav p-4 items-center">
      <h1 className="font-bebas text-4xl tracking-wider">
        Movie Base
      </h1>
      <div className="basis-4/6 relative">
        <input
          type="text"
          placeholder="What movie you are thinking about..."
          onFocus={() => resultListRef.current.style.display = "block"}
          onBlur={() => resultListRef.current.style.display = "none"}
          className="w-full h-12 p-2 bg-lightPrimeGray focus:outline-none rounded-md"
        />

        <div className="absolute hidden bg-textNav text-black w-full rounded-lg" ref={resultListRef}>
          <div className="text-xl p-4 border-b-[1px] border-solid border-b-black">Result 1</div>
          <div className="text-xl p-4 border-b-[1px] border-solid border-b-black">Result 2</div>
          <div className="text-xl p-4 border-b-[1px] border-solid border-b-black">Result 3</div>
        </div>
      </div>
      
      <div>Theme</div>
    </div>
  );
};

export default NavBar;
