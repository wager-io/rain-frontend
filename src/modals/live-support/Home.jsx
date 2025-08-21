import React from 'react';
import { IoSearch } from "react-icons/io5";

export default function Home({ onClose }) {
    
  return (
    <div className="relative p-8 pb-6 shadow-2xl bg-white w-full  min-h-full flex flex-col rounded-2xl">
      {/* Background container with overlay */}
      <div className="absolute -top-1 -left-1 w-[calc(100%+8px)] h-[300px] rounded-t-xl overflow-hidden z-0">
        <img
          src="/6aef330c08558c4347f0d23ce04307cc.png"
          alt="Background"
          className="w-full h-full object-cover object-center block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 flex justify-between items-center mb-4">
        <img
          src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1714511848/Wager__wshh2r.png"
          className="h-8"
          alt="Wager Logo"
        />
        <div className="flex items-center gap-2">
          <button 
            className="bg-transparent border-none text-2xl text-white cursor-pointer ml-2 hover:opacity-80 transition-opacity" 
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>

      {/* Title and subtitle */}
      <div className="relative z-20 text-3xl font-semibold text-white mb-1">
        Hey there <span role="img" aria-label="wave">👋</span>
      </div>
      <div className="relative z-20 text-xl font-bold text-white mb-8">
        How can we help?
      </div>

      {/* Cards */}
      <div className="relative z-20 flex flex-col gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <button className="bg-transparent border-none text-base font-bold text-gray-800 cursor-pointer p-0 text-left w-full transition-colors duration-200 hover:text-blue-500 mb-1.5">
            What to do if you are unable to access your Two-Factor Authentication (2FA)?
          </button>
          <div className="text-sm text-gray-500">
            If you are unable to access your two-factor authentication...
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <button className="bg-transparent border-none text-base font-bold text-gray-800 cursor-pointer p-0 text-left w-full transition-colors duration-200 hover:text-blue-500 mb-1.5">
            How to reset your password?
          </button>
          <div className="text-sm text-gray-500">
            1. If you've forgotten your password but have linked an email...
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative z-20 flex items-center bg-white border border-gray-200 rounded-xl px-3 h-12 shadow-sm">
        <input 
          type="text" 
          placeholder="Search for help" 
          className="border-none outline-none flex-1 text-base bg-transparent text-gray-800 placeholder-gray-400"
        />
        <button className="bg-transparent border-none cursor-pointer text-blue-500 text-xl flex items-center justify-center hover:opacity-80 transition-opacity">
          <IoSearch />
        </button>
      </div>
      
    </div>
  );
}
