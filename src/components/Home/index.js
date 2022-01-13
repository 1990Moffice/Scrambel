import React from 'react'
import Homesecthow from './Homesecthow'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Homesecthree from './Homesecthree'
import Footer from './Footer'
import Stats from './Stats'
import Hero from './Hero'
import Imagesec from './Imagesec'

const Index = () => {
    return (
        <div>
            <Hero />
            <Homesecthow />
            <Imagesec />
            <Homesecthree />
            <Stats />
            
            <div className='sm:px-56 grid justify-items-center sm:justify-items-end bg-black h-screen overflow-auto '>
<TwitterTimelineEmbed
  sourceType="widget"
  screenName="ragefansocial"
  options={{height: 900}}
//   options={{width: 200}}
  
/></div>


            <Footer />
        </div>
    )
}

export default Index
