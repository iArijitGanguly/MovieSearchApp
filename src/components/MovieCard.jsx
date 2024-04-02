import React from 'react';

const MovieCard = ({ Title, Year, Type, Poster }) => {
  return (
    <div className='max-w-[30%] mb-12 text-center flex flex-col border-[1px] border-solid border-white py-5 px-0 rounded-lg items-center bg-white'>
        <div>
            <img src={Poster} />
        </div>

        <div className='text-3xl font-mullish tracking-widest mt-8'>
            <span>{Title}</span>
        </div>

        <div className='mt-4 text-xl tracking-wide'>
            <span>Released in: {Year}</span>
        </div>

        <div className='mt-4 text-xl tracking-wide'>
            <span>Type: {Type}</span>
        </div>
    </div>
  )
}

export default MovieCard;