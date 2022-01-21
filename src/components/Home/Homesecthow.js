import React from "react";
import './home.css'
import Logorevil from '../../images/Video/scramble.mp4'
import Image1 from '../../images/Logo/sdk-02-02-03 (2).png'
import Image2 from '../../images/Logo/sdk-02-02-04 (1).png'
import Fade from 'react-reveal/Fade';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <div id="navigateHere" className="da flex flex-col px-10 py-20 lg:grid lg:grid-cols-3 place-items-center bg-black">
    
    <Fade left cascade>
        <div className=" w-6/12 py-10 lg:-mr-80 ">
        <video
  src={Logorevil}
  className=" rounded-3xl"
  muted
  autoPlay={"autoplay"}
  preLoad="auto"
  loop 
 > </video>
          </div>
</Fade>
         
        
      <div className=" lg:col-span-2 flex flex-wrap ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                    "border-2 border-white text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transform duration-300 hover:-translate-y-2 " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600" 
                      : "text-white" + color + "-600 bg-white")
                  }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Gamers 
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                 className={
                    "border-2 border-white text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transform duration-300 hover:-translate-y-2 " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600" 
                      : "text-white" + color + "-600 bg-white")
                  }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Game developers 
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full shadow-lg rounded">
            <div className="lg:px-10 px-1 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="lg:px-10 px-1 py-2 text-white">
                  <p className="font-bold text-3xl mb-5">
                  Features for Gamers
                  </p>
                <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Play casual games</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Buy and trade NFTs</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Participate in leaderboard Contests and competition within the app</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Earn $RAGE through playing games on the app</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Stake and earn rewards</span>
        </div>
      </div>
                </div>
                </div>


                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="py-2 text-white">
                  <p className="font-bold text-3xl mb-5">
                  Features for Game Dev
                  </p>
                <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Facilitate Blockchain and Crypto experience for games built by the publishers.</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Publish games to active users
</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Sell game NFTs for revenue</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Reward and retain users
</span>
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="bg-gray-800 rounded flex p-4  items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium text-white">Earn revenue through ads</span>
        </div>
      </div>
                </div>
                </div>
                <div className="flex dadadada justify-center">
                  <div className="w-2/4 sm:w-1/4 ">
                  <a href="https://apps.apple.com/in/app/scramble-token-hunt/id1581554530">
                    <img src={Image1} alt="app store" />
                  </a>
                  </div>
                  <div className="w-2/4 sm:w-1/4 ">
                  <a href="https://play.google.com/store/apps/details?id=com.ragefan.scramble">
                    <img src={Image2} alt="app store"/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
    <Tabs color="indigo" />
    </>
  );
}