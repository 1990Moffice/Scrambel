
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Faq } from './Faq';
import './home.css'
const Twitterfile = () => {
    return (
        <div className='bg-black da'>
        <div className='sm:px-44 sm:grid sm:grid-cols-3 gap-2 flex flex-col h-screen overflow-auto'>
           
<div className='text-white grid col-span-2'>
<Faq />

</div>

 <div className=' grid justify-items-center lg:pt-10'>
<TwitterTimelineEmbed
  sourceType="widget"
  screenName="ragefansocial"
  options={{height: 900}}
//   options={{width: 200}}
  
/></div>
        </div>
        </div>
    )
}

export default Twitterfile
