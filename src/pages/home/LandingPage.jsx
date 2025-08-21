import React, { lazy, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
const BetsTable = lazy(() => import('../../components/betsTable/Layout'));
import axios from "axios"
import InhouseGames from './sections/InHouseGames';

export default function LandingPage() {

  return (
    <div className='px-0'>
      {/* banner section */}
      <div 
        className='py-8 md:py-12 lg:py-16 bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[200px]'
        style={{ backgroundImage: 'url("/assets/landingpage/banner-bg.png")' }}
      >
  
        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-2 md:px-6 lg:px-12 gap-8 lg:gap-16">
          {/* Left Side - Title and Buttons */}
          <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-md lg:ml-auto">
            <h1 
              className="text-lg md:text-lg lg:text-lg xl:text-3xl font-bold mb-6 md:mb-8 leading-tight"
              style={{ color: 'var(--text-light)' }}
            >
              Experience Betting Without Boundaries
            </h1>
            
            {/* Buttons Container */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: 'var(--accent-purple)' }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 4px 16px var(--shadow-purple)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none'
                }}
              >
                Register
              </button>
              
              <span 
                className="text-sm font-medium sm:block hidden"
                style={{ color: 'var(--text-medium)' }}
              >
                or
              </span>
              <div 
                className="sm:hidden text-center py-2"
                style={{ color: 'var(--text-medium)' }}
              >
                or
              </div>
              
              <div 
                className="flex items-center gap-2 px-6 py-3 rounded-lg border font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--tertiary-bg)',
                  color: 'var(--text-light)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--accent-purple)'
                  e.target.style.backgroundColor = 'var(--hover-bg)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-color)'
                  e.target.style.backgroundColor = 'var(--tertiary-bg)'
                }}
              >
                <button 
                  onClick={() => console.log('MetaMask clicked')}
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <img 
                    src="/assets/MetaMask-Logo-Pack/MetaMask/MetaMask-icon-fox-with-margins.svg"
                    alt="MetaMask"
                    className="w-5 h-5"
                  />
                </button>
                <button 
                  onClick={() => console.log('Google clicked')}
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <FcGoogle className="w-5 h-5" />
                </button>
                <span>Connect</span>
              </div>
            </div>
          </div>

          {/* Right Side - Casino and Sports Cards */}
          <div className="flex flex-row gap-4 md:gap-6 lg:ml-8">
            {/* Casino Card */}
            <div 
              className="relative w-full sm:w-48 md:w-56 lg:w-60 h-48 sm:h-56 md:h-60 lg:h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-2"
              style={{ backgroundColor: 'var(--tertiary-bg)' }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 24px var(--shadow-purple)'
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 4px 12px var(--shadow-dark)'
              }}
            >
              <img 
                src="/assets/landingpage/casino-section.png" 
                alt="Casino Games" 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t border-t-2 from-black/80 to-transparent"
                style={{ 
                    borderColor: 'var(--border-color)',
                    backgroundColor: 'var(--tertiary-bg)'
                }}
              >
                <div 
                  className="text-base md:text-lg font-bold "
                  style={{ color: 'var(--text-light)' }}
                >
                  Casino
                </div>
              </div>
            </div>
            {/* Sports Card */}
            <div 
              className="relative w-full sm:w-48 md:w-56 lg:w-60 h-48 sm:h-56 md:h-60 lg:h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:-rotate-2"
              style={{ backgroundColor: 'var(--tertiary-bg)' }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 24px var(--shadow-purple)'
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 4px 12px var(--shadow-dark)'
              }}
            >
              <img 
                src="/assets/landingpage/sport-section.png" 
                alt="Sports Betting" 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t border-t-2 from-black/80 to-transparent"
                style={{ 
                    borderColor: 'var(--border-color)',
                    backgroundColor: 'var(--tertiary-bg)'
                }}
              >
                <div 
                  className="text-base md:text-lg font-bold "
                  style={{ color: 'var(--text-light)' }}
                >
                  Sports
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InhouseGames />

      <BetsTable />
    </div>
  )
}

