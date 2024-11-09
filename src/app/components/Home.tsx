import React from 'react';
import Image from 'next/image';
 import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
// import { HeroHighlight } from '@/app/components/ui/hero-highlight';
import AI from '@/assets/AI.jpg'

const Home = () => {
  return (
    // <HeroHighlight>
       <BackgroundBeamsWithCollision> 
        <div className="flex flex-col justify-center items-start h-screen mb-20 md:px-10 lg:px-16 bg-black text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold leading-tight ">
            Welcome to <span className="text-purple-900">SmartSync AI</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl font-light mb-8 font-serif w-full md:w-3/4 lg:w-1/2 mt-7">
            A voice-controlled AI planner integrated with Google Calendar offering a powerful, hands-free solution for scheduling, reminders, and personalized health guidance.
          </p>
          <button className='font-bold px-6 py-3 bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] rounded-lg hover:bg-gradient-to-t'>
            Get started
          </button>
            {/* <Image
          src={} // Make sure to use an image of your choice
          alt="Contact Background"
          // layout="fill"
          objectFit="cover"
          quality={100} width={100}
        />  */}
        </div>
      </BackgroundBeamsWithCollision>
      // {/* </HeroHighlight> */}
    
  );
};

export default Home;
