"use client"
import React from "react";
// import 'swiper/swiper-bundle.min.css';
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
 import { HeroHighlight } from '@/app/components/ui/hero-highlight';

const benefits = [
  {
    quote: "Stay organized with automated scheduling.",
    name: "Efficient Scheduling",
    title: "Voice-Controlled Planning",
  },
  {
    quote: "Sync effortlessly with Google Calendar.",
    name: "Seamless Integration",
    title: "Cross-Device Access",
  },
  {
    quote: "Get timely reminders and notifications.",
    name: "Timely Reminders",
    title: "Never Miss an Appointment",
  },
  {
    quote: "Personalized wellness tips for a balanced life.",
    name: "Wellness Guidance",
    title: "Health and Well-Being",
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center py-10 px-6 sm:px-12 md:px-24 lg:px-48 ">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-purple-800">
          About Our Planner
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
          The ultimate voice-controlled AI planner that seamlessly integrates with Google Calendar.
        </p>
      </header>

      {/* Vision Section */}
      <section className="w-full max-w-4xl bg-gray-400 shadow-md rounded-lg p-8 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-purple-950 font-serif">
          Our Vision
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Our AI planner is designed to offer hands-free scheduling, reminders, and health guidance for
          busy users. Whether you're managing appointments, setting reminders, or receiving wellness
          tips, our planner empowers you to stay organized and healthy without manual effort.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-4xl bg-gray-400 shadow-md rounded-lg p-8 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-purple-950 font-serif">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
          <li>Voice commands for easy scheduling, reminders, and health tips</li>
          <li>Automated sync with Google Calendar for a streamlined experience</li>
          <li>Secure OAuth authentication to keep your data safe</li>
          <li>Cross-device accessibility for on-the-go planning</li>
          <li>Personalized wellness insights tailored to your daily activities</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-4xl bg-gray-400 shadow-md rounded-lg p-8 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-purple-950 font-serif">
          How It Works
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Our planner uses advanced natural language processing to interpret voice commands, helping you
          quickly schedule events or set reminders. By connecting with Google Calendar, our AI ensures
          your schedule remains up-to-date with any additions, changes, or deletions across your devices.
        </p>
      </section>

      {/* Infinite Moving Cards Component */}
      <div className="w-full max-w-4xl mb-16">
        <InfiniteMovingCards
          items={benefits}
          direction="left" // Optional: default is left, you can set it to 'right' if needed
          speed="normal" // Optional: set the speed of scrolling ('fast', 'normal', 'slow')
          pauseOnHover={true} // Optional: enable/disable pausing when hovering over the cards
        />
      </div>

      {/* Final Text Section */}
      <div className="text-center max-w-4xl px-6 md:px-12">
        <p className="text-lg sm:text-xl text-gray-600">
          Our AI planner is designed to help you stay on top of your schedule while enhancing your wellness
          journey.
        </p>
      </div>
    </div>
  );
};

export default About;
