'use client';
import React from 'react';
import Image from 'next/image';
import AI2 from '@/assets/AI2.jpg';
import { BackgroundBeamsWithCollision } from '@/app/components/ui/background-beams-with-collision';

const Home = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col md:flex-row justify-between items-center h-screen mb-20 p-6 md:px-10 lg:px-16 bg-black text-white">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Welcome to <span className="text-purple-900">SmartSync AI</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light mb-8 font-serif w-full mt-6">
            A voice-controlled AI planner integrated with Google Calendar, offering a powerful, hands-free solution for scheduling, reminders, and personalized health guidance.
          </p>
          <button className="font-bold px-6 py-3 bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] rounded-lg hover:bg-gradient-to-t">
            Get started
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={AI2}
            alt="AI Assistant"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg w-3/4 md:w-100"
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Home;
