import React from "react";
import { useState } from "react";
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
            <p className="text-white">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faqnew = () => {
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
            <p class="text-base text-white md:text-lg ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
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
claim rewards for winning.

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
            <Item title="7) How do I sign up for Scramble?">
            Download the mobile app from Google Playstore. IOS app will be launched
soon. The users can sign up on Scramble by filling a short registration form.
After filling the form, the user can create a new wallet or import the
existing wallet. All transactions on Scramble app require a creating wallet
            </Item>
            <Item title="8) How to create a wallet in Scramble?">
            During the registration, the user can create a new wallet or import his/her
existing wallet. Below are the steps if you want to create a wallet in an
external application.
<br/>
A. Create ERC20 compatible wallet in metamask, trust wallet, magic or
portis, etc. We do not recommend any specific wallet. The wallet
should be ERC20 compatible and in polygon network.<br/>
B. Import the wallet in scramble while registering using the private key
            </Item>
            <Item title="9) How to import a third party wallet in Scramble?">
            a) After successfully signing up, click on the import wallet<br/>
b) Enter the private key for your wallet<br/>
c) After a successful authentication of your wallet, the wallet would be
imported
            </Item>
            <Item title="10) How to retrieve my account if I forget the password?">
            While creating an account on Scramble, the user would be provided with a
seed or private key. If the user has imported the wallet the private key will
be available in the application used for creating the wallet. User should
copy the private key & store safely to retrieve the account in case he/she
forgets the password.

            </Item>
            <Item title="11) How to retrieve my account if I forget the password">
            The account cannot be retrieved if both password and private key are lost.
They are encrypted and only the user can access.

            </Item>
           
            <Item title="12) How to collect digital assets on the Scramble?">
            The mobile app is simple and straightforward where the users view the list
of tokens or NFT and Scramble them. To Scramble, they have to physically
move to the location of the token and capture it on their mobile device
            </Item>
            <Item title="13) Which Blockchain network does Scramble support?">
            Scramble supports Polygon chain as of now
            </Item>
          </div>
        </div>
      </div>
    );
  };

  export default Faqnew