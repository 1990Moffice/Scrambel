import React from "react";
import { useState } from "react";
import { Link } from 'gatsby';
import Android from '../../images/Logo/sdk-02-02-04 (1).png'
import Ios from '../../images/Logo/sdk-02-02-03 (2).png'
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-200 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-200">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                    width="52"
                    height="24"
                  />
                </svg>
    
              </span>
              FAQs
            </h2>
            <p class="text-base text-gray-300 md:text-lg ">
            We know you will have questions, here are answers to questions which usually everyone asks.
If you don't find something you are looking for, write to us.
            </p>
          </div>
          <div class="space-y-4">
            <Item title="1) What are Hyper Casual Games?" isOpen={true}>
            A hyper-casual game is a mobile video game which is easy-to-play, with
simple designs and highly interactive. These games can be quickly played
after downloading, usually without any tutorial or instructions
            </Item>
            <Item title="2) What are Play to Earn Games?">
            Play-to-earn is exactly what it sounds like – a business model where users
get to play a game and earn cryptocurrency ($RAGE) while doing it.
            </Item>
            <Item title="3) Where can I play the games to earn money?">
            There are many games on the Scramble app which you can play & also
earn while playing
            </Item>
            <Item title="4) What is a Scramble?">
            Scramble is Ragefan's flagship, first of its kind token hunt & play to earn
gaming platform. Users can hunt Crypto Tokens & NFTs airdropped
anywhere in the world & also play various games on the platform & can
claim rewards for winning
            </Item>
            <Item title="5) Is there any fee to play games on Scramble?">
            Yes, you need minimum 30 PRAGE & 10 RAGE in your wallet to play the
games on the Scramble
            </Item>
            <Item title="6) How to download the Scramble App?">
            Scramble app can be downloaded from the Playstore. You can also
download Scramble from here:
            <div className="flex">
            <div className="px-10 py-6">
              <a href="https://play.google.com/store/apps/details?id=com.ragefan.scramble">
              <img src={Android} alt="Android link" />
              </a>
            </div>
            <div className="px-10 py-6">
              <a href="https://apps.apple.com/in/app/scramble-token-hunt/id1581554530">
              <img src={Ios} alt="Ios link" />
              </a>
            </div>
            </div>
            </Item>
           
          </div>
        </div>
        <Link to="/Faq" className=' text-white  flex justify-center py-8 text-xl '>
    View More
    <svg
              className="inline-block w-3 ml-2 "
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
  </Link>
      </div>
    );
  };