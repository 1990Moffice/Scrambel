import React from 'react'
import Fade from 'react-reveal/Fade';

const Stats = () => {
    return (
    <Fade bottom cascade>
        <div className='bg-black text-white'>
            
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">     
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r  py-5">
         
          <h6 class="text-4xl text-white font-bold lg:text-5xl xl:text-6xl">7000+</h6>
          <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase lg:text-base">
            Registered users
          </p>
        </div>
        <div class="text-center md:border-r  py-5">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">200+</h6>
          <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase lg:text-base">
            Daily users
          </p>
        </div>
        <div class="text-center md:border-r  py-5">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">8+</h6>
          <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase lg:text-base">
            Active games
          </p>
        </div>
        <div class="text-center  py-5">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">2000+</h6>
          <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase lg:text-base">
            Rage collected daily
          </p>
        </div>
      </div>
     

    </div>
 
        </div>
        </Fade>
    )
}

export default Stats
