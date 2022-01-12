import React from 'react'
import Photo1 from '../../images/Profile/deepa.jpg'
import Photo2 from '../../images/Profile/george.png'
import Photo3 from '../../images/Profile/praisudi.jpeg'
import Photo4 from '../../images/Profile/sat.png'

const Aboutsectwo = () => {
    return (
        <div className='bg-black' id='knowme'>
             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
          Our Team
        </p>
        {/* <p className="text-base text-gray-300 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p> */}
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4 text-white">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-28 h-28 mb-2 rounded-full shadow"
            src={Photo4}
            alt="SATHEESH 
            ANANTHASUBRAMANIAN"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold justify-center text-center">SATHEESH ANANTHASUBRAMANIAN</p>
            <p className="text-sm text-gray-300">Chief Executive Officer</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-28 h-28 mb-2 rounded-full shadow"
            src={Photo2}
            alt="GEORGE 
            MATHAI"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">GEORGE 
MATHAI</p>
            <p className="text-sm text-gray-300">Product Lead</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-28 h-28 mb-2 rounded-full shadow"
            src={Photo3}
            alt="PRAISUDI
            SARAVANAVEL"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">PRAISUDI
SARAVANAVEL</p>
            <p className="text-sm text-gray-300">Product Lead</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-28 h-28 mb-2 rounded-full shadow"
            src={Photo1}
            alt="DEEPA
            MALLESH"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">DEEPA
MALLESH</p>
            <p className="text-sm text-gray-300">Marketing & Partnerships Lead</p>
          </div>
        </div>
       
      </div>
    </div>
        </div>
    )
}

export default Aboutsectwo
