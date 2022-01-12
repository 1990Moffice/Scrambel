import React from 'react'
import image1 from '../../images/games/Untitled-3-08-01.png'
import image2 from '../../images/games/Untitled-3-08-02.png'
import image3 from '../../images/games/Untitled-3-08-03.png'
import image4 from '../../images/games/Untitled-3-08-05.png'
import image5 from '../../images/games/Untitled-3-08-06.png'
import image6 from '../../images/games/Untitled-3-08-07.png'
import image7 from '../../images/games/Untitled-3-08-08.png'
import image8 from '../../images/games/Untitled-3-08-09-09.png'
import './home.css'

const Homesecthree = () => {
    return (
      <div id='data' className='dada relative bg-black bg-opacity-50'>
      <div className='datapro11' id='datapro1'></div>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div className='flex justify-center'>
      <p className="inline-block  px-3 py-px mb-4 text-xl font-semibold tracking-wider text-white uppercase rounded-full">
        Our hyper casual games
      </p>
    </div>
    {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
          <defs>
            <pattern
              id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
            width="52"
            height="24"
          />
        </svg>
       
      </span>{' '}
      Our games
    </h2> */}
    <p className="text-base text-center text-gray-400 md:text-lg">
    Rage has introduced hyper casual gaming to cryptoverse making it easier for the gamers to play and earn.
We have different models depending on the requirement of the user, we allow users to Play via paying $RAGE as fees or buy an NFT which enables a user to Play the game.
    </p>
  </div>
  <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image1}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Carrom
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image2}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Dunk Master
          </p>
       
        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image3}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Snakes & Ladders
          </p>

        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image4}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Tetris Bricks
          </p>
         
        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image5}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Rampage Road
          </p>
      
        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image6}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Classic Snakes
          </p>
        
        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image7}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Dino Jump
          </p>
         
         
        </div>
      </div>
    </div>
    <div>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
          className="object-cover w-full h-44 md:h-64 xl:h-44"
          src={image8}
          alt="Person"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">
          Tower Drop
          </p>
        
      
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    )
}

export default Homesecthree


