import React from 'react';
import { 
  FiMail, 
  FiTwitter, 
  FiInstagram, 
  FiShield, 
  FiCheckCircle, 
  FiAward,
  FiMessageCircle
} from 'react-icons/fi';


const Footer = () => {
 return (
   <footer 
     className="py-10 px-4 md:px-12"
     style={{ backgroundColor: 'var(--footer-bg)' }}
   >
     <div className="container mx-auto">
       {/* Top Section */}
       <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8">
       {/* Logo and About Section */}
       <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
           <div className="flex items-center mb-4">
             <img 
               src="/assets/logo.png" 
               alt="WagerGames Logo" 
               className="h-8 w-auto mr-3"
             />
           </div>
           <p 
             className="text-sm mb-4 leading-relaxed"
             style={{ color: 'var(--text-dark)' }}
           >
             WagerGames.casino, recognized among the best crypto casino options, providing world-class gaming entertainment with cutting-edge technology and secure transactions.
           </p>
           <div 
             className="flex items-center mb-2"
             style={{ color: 'var(--text-dark)' }}
           >
             <FiMail className="h-4 w-4 mr-2" />
             <a 
               href="mailto:support@wagergames.casino" 
               className="text-sm transition-colors duration-200"
               style={{ color: 'var(--text-dark)' }}
               onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
             >
               support@wagergames.casino
             </a>
           </div>
           <div 
             className="flex items-center mb-4"
             style={{ color: 'var(--text-dark)' }}
           >
             <FiMessageCircle className="h-4 w-4 mr-2" />
             <a 
               href="mailto:info@wagergames.casino" 
               className="text-sm transition-colors duration-200"
               style={{ color: 'var(--text-dark)' }}
               onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
             >
               info@wagergames.casino
             </a>
           </div>
           <div className="flex space-x-4">
             <a 
               href="#" 
               className="rounded-full p-2 transition-all duration-200 hover:scale-110"
               style={{ backgroundColor: 'var(--secondary-bg)' }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = 'var(--tertiary-bg)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'var(--secondary-bg)'
               }}
             >
               <FiTwitter 
                 className="h-4 w-4"
                 style={{ color: 'var(--text-medium)' }}
               />
             </a>
             <a 
               href="#" 
               className="rounded-full p-2 transition-all duration-200 hover:scale-110"
               style={{ backgroundColor: 'var(--secondary-bg)' }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = 'var(--tertiary-bg)'
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'var(--secondary-bg)'
               }}
             >
               <FiInstagram 
                 className="h-4 w-4"
                 style={{ color: 'var(--text-medium)' }}
               />
             </a>
           </div>
         </div>


         {/* Links Sections (WAGERGAMES, RESOURCES, LEGAL) */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/5 text-sm">
           {/* WAGERGAMES Section */}
           <div className="mb-4 lg:mb-0">
             <h6 
               className="font-semibold mb-3"
               style={{ color: 'var(--text-light)' }}
             >
               WAGERGAMES
             </h6>
             <ul>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Rewards
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Promotions
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Provably Fair
                 </a>
               </li>
               <li>
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Contact Us
                 </a>
               </li>
             </ul>
           </div>


           {/* RESOURCES Section */}
           <div className="mb-4 lg:mb-0">
             <h6 
               className="font-semibold mb-3"
               style={{ color: 'var(--text-light)' }}
             >
               RESOURCES
             </h6>
             <ul>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Responsible Gambling
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Accessibility
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Code of Ethics
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Modern Slavery Statement
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Complaints Policy
                 </a>
               </li>
               <li>
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   GDPR Compliance
                 </a>
               </li>
             </ul>
           </div>

           {/* LEGAL Section */}
           <div className="mb-4 lg:mb-0">
             <h6 
               className="font-semibold mb-3"
               style={{ color: 'var(--text-light)' }}
             >
               LEGAL
             </h6>
             <ul>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   AML
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Sportsbook Rules
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Cookie Policy
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Editorial Policy
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Disclaimer
                 </a>
               </li>
               <li className="mb-2">
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Privacy Policy
                 </a>
               </li>
               <li>
                 <a 
                   href="#" 
                   className="transition-colors duration-200 hover:translate-x-1"
                   style={{ color: 'var(--text-dark)' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--text-light)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--text-dark)'}
                 >
                   Terms of Service
                 </a>
               </li>
             </ul>
           </div>
         </div>
       </div>


       {/* Crypto Icons Section */}
       <div 
         className="mb-8 border-t pt-8"
         style={{ borderTopColor: 'var(--border-color)' }}
       >
         <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
           <img src="/assets/btc.svg" alt="Bitcoin" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/eth.svg" alt="Ethereum" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/ltc.svg" alt="Litecoin" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/ada.svg" alt="Cardano" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/bnb.svg" alt="Binance Coin" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/xrp.svg" alt="Ripple" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/trx.svg" alt="Tron" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/sol.svg" alt="Solana" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/ton.svg" alt="TON" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <img src="/assets/link.svg" alt="Chainlink" className="h-10 w-10 transition-transform duration-200 hover:scale-110" />
           <span 
             className="text-sm ml-2"
             style={{ color: 'var(--text-dark)' }}
           >
             & more...
           </span>
         </div>
       </div>


       {/* Badges/Licenses Section */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
         <div 
           className="rounded-lg p-4 flex items-center w-full md:w-auto"
           style={{ backgroundColor: 'var(--secondary-bg)' }}
         >
           <div 
             className="rounded-full p-2 mr-3"
             style={{ backgroundColor: 'var(--tertiary-bg)' }}
           >
             <FiShield 
               className="h-6 w-6"
               style={{ color: 'var(--success-green)' }}
             />
           </div>
           <span 
             className="text-sm font-semibold"
             style={{ color: 'var(--text-medium)' }}
           >
             Responsible Gambling
           </span>
         </div>

         <div 
           className="rounded-lg p-4 flex items-center w-full md:w-auto"
           style={{ backgroundColor: 'var(--secondary-bg)' }}
         >
           <div 
             className="rounded-full p-2 mr-3"
             style={{ backgroundColor: 'var(--tertiary-bg)' }}
           >
             <FiCheckCircle 
               className="h-6 w-6"
               style={{ color: 'var(--success-green)' }}
             />
           </div>
           <span 
             className="text-sm font-semibold"
             style={{ color: 'var(--text-medium)' }}
           >
             Provably Fair
           </span>
         </div>

         <div 
           className="rounded-lg p-4 flex items-center w-full md:w-auto"
           style={{ backgroundColor: 'var(--secondary-bg)' }}
         >
           <div 
             className="rounded-full p-2 mr-3"
             style={{ backgroundColor: 'var(--tertiary-bg)' }}
           >
             <FiAward 
               className="h-6 w-6"
               style={{ color: 'var(--success-green)' }}
             />
           </div>
           <span 
             className="text-sm font-semibold"
             style={{ color: 'var(--text-medium)' }}
           >
             Licensed
           </span>
         </div>
       </div>

       {/* Copyright Section */}
       <div 
         className="text-center text-xs pt-8 border-t"
         style={{ 
           color: 'var(--text-dark)',
           borderTopColor: 'var(--border-color)'
         }}
       >
         Copyright © 2025 wagergames.casino. All Rights Reserved.
       </div>
     </div>
   </footer>
 );
};


export default Footer;