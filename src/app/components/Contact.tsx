"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/app/lib/utils";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form on submit
    setTimeout(() => setIsSubmitted(false), 3000); // Reset form submission state
  };

  return (
    <div className="relative bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/images/contact-bg.jpg" // Make sure to use an image of your choice
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contact Content */}
      <div className="relative z-10 text-center pt-20 pb-32 px-4 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-purple-900">Get In Touch</h1>
        <p className="text-lg mb-8 text-pink-900">
          We would love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white bg-opacity-40 p-8 rounded-xl shadow-lg space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder=" "
              />
              <label className="absolute left-4 top-0 text-white text-sm transition-all transform origin-top-left -translate-y-1/2">
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder=" "
              />
              <label className="absolute left-4 top-0 text-white text-sm transition-all transform origin-top-left -translate-y-1/2">
                Your Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder=" "
              ></textarea>
              <label className="absolute left-4 top-0 text-white text-sm transition-all transform origin-top-left -translate-y-1/2">
                Your Message
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {isSubmitted ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
