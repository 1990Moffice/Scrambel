import React from 'react'
import Logo from '../../images/Logo/white-logo.png'
import './index.css'

const Aboutsecone = () => {
    return (
        <div>
            <div >
            <section className="text-white" id='main' role="banner">
                <div className='Logo hidden sm:block'>
                    <img src={Logo} className=' h-full sm:h-28' alt='Logo'/>
                </div>
                <div className='h-56 flex justify-center pt-10 sm:hidden'>
                    <img src={Logo} className='h-full sm:h-28' alt='Logo'/>
                </div>
  <div className=" py-10 pt-28 sm:pt-0 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:flex lg:items-center">
    <div className="max-w-3xl mx-auto text-center">
      <h1
        className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      >
        Join the revolution
      </h1>

      <p className="max-w-xl mx-auto mt-6 text-lg">
      Imagine a world where your hard-earned digital assets are more valuable & accessible to everyone. 
      Gamers can relish ownership of their gaming assets through NFTs & earn rewards. We bring the whole gaming world to you.
      </p>

      <div className="mt-8 sm:justify-center sm:flex">
        <a href="./" className="block px-5 py-3 font-medium bg-purple-600 rounded-lg hover:bg-purple-500">
          Get started today
        </a>

        <a
          href="./"
          className="block px-5 py-3 mt-3 font-medium border border-purple-600 rounded-lg sm:ml-3 sm:mt-0 hover:border-purple-500"
       
        >
          Find out more
        </a>
      </div>
    </div>
  </div>
  <div class="icon-scroll hidden sm:block"
   onClick={scrollToTestDiv}
  ></div>
</section>
        </div>
        </div>
    )
}

export default Aboutsecone

function scrollToTestDiv(){
  const divElement = document.getElementById('knowme');
  divElement.scrollIntoView({ behavior: 'smooth' });
}