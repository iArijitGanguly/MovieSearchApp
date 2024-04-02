import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between border-2 border-solid border-dullBlue bg-dullBlue text-textNav p-4 items-center">
      <h1 className="font-bebas text-4xl tracking-wider">
        Movie Base
      </h1>
      <div className="basis-4/6">
        <input
          type="text"
          placeholder="What movie you are thinking about..."
          className="w-full h-12 p-2 bg-lightPrimeGray focus:outline-none rounded-md"
        />
      </div>

      <div>Theme</div>
    </div>
  );
};

export default NavBar;
