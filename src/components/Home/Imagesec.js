import React from 'react'
import Image1 from '../../images/banner/sdk-02-02-02.png'
import Image2 from '../../images/banner/sdk-02-02-03 (1).png'
import Eth from '../../images/games/Untitled-3-08.png'
import './home.css'
const Imagesec = () => {
    return (
        <div className=' relative'>
            <div className='hidden sm:block mainboj absolute bottom-44 right-44 h-16 w-16'>
            <img src={Eth} className='' alt='anima' />
            </div>
            <div className='hidden sm:block mainboj  absolute top-44 left-44 h-20 w-20'>
            <img src={Eth} className='' alt='anima' />
            </div>
        <div className='immage h-3/6 hidden sm:block'>
            <img src={Image1} alt='banner'/>
        </div>
        <div className='immage h-3/6 sm:hidden'>
            <img src={Image2} alt='banner'/>
        </div>
        </div>
    )
}

export default Imagesec
