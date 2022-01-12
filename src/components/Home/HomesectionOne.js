import React from 'react'
import Logorevil from '../../images/Video/Side Rage Logo-2 (1).mp4'
import './home.css'

const HomesectionOne = () => {
    return (
        <div className='bg-black h-screen '>
<div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">RAGE FAN - 
              <span className="inline-block text-deep-purple-accent-400">
              Play, Win, Repeat
              </span>
            </h2>
            <p className="text-base text-gray-300 md:text-lg text-left ">
            Our Blockchain-based gaming ecosystem is for passionate gamers & everyone who enjoys hyper casual gaming.

            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded-full shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-black hover:text-white focus:shadow-outline focus:outline-none border-2 border-white"
            >
              <span className="mr-3">Know more</span>
              
            </a>
  
          </div>
        </div>
        <div className="relative lg:w-8/12">
        <video
  src={Logorevil}
  
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
//   loop 
 > </video>
        </div>
      </div>
    </div>
    
    </div>
    )
}

export default HomesectionOne
