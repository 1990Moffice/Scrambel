import React from 'react'
import Logorevil from '../../images/Video/Side Rage Logo-2 (1).mp4'
import Logomob from '../../images/Video/Mobile Rage-1.mp4'
import './home.css'

const hero = () => {
    return (
       
            <div className="relative h-screen ">
              <div>
            <video
  src={Logorevil}
  className="absolute inset-0 object-cover w-full h-full hidden sm:block"
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
//   loop 
 > </video>
 <video
  src={Logomob}
  className="absolute inset-0 object-cover w-full h-full sm:hidden"
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
//   loop 
 > </video>
    </div>
      <div className="relative bg-opacity-75 lg:pt-64 pt-96">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 text-center sm:text-left  text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              RAGE FAN -Play, Win, Repeat
              </h2>
              <p className="max-w-xl text-center sm:text-left mb-4 text-base text-gray-400 md:text-lg">
              Our Blockchain-based gaming ecosystem is for passionate gamers & everyone who enjoys hyper casual gaming.
              </p>
              <div className='flex justify-center sm:justify-start'>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider bg-white shadow-white  hover:shadow-indigo-500/90 hover:bg-black hover:shadow-xl  drop-shadow-2xl px-6 mt-5 py-2 rounded-full transition-colors duration-200 text-black hover:text-white"
                // className="block px-5 py-3 mt-3 font-medium border border-purple-600 rounded-lg  sm:mt-0 hover:border-purple-500  tracking-wider hover:shadow-indigo-500/90 drop-shadow-2xl shadow-white text-white transition-colors duration-200"
              >
                Know more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div id="mouse-scroll" className='cursor-pointer' onClick={scrollToTestDiv}>
    <div class="mouse" >
        <div class="mouse-in"></div>
    </div>
    <div>
        <span class="down-arrow-1"></span>
        <span class="down-arrow-2"></span>
        <span class="down-arrow-3"></span>
    </div>
</div>
    </div>
    )
}

export default hero

function scrollToTestDiv(){
    const divElement = document.getElementById('navigateHere');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }