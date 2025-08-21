import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  FiHome, FiHeart, FiClock, FiStar, FiChevronDown, FiChevronRight,
  FiGift, FiHeadphones, FiGlobe, FiZap, FiSquare, FiTriangle,
  FiCircle, FiPlay, FiTrendingUp, FiTarget, FiGrid, FiMonitor
} from 'react-icons/fi'
import { languageData } from '../../constants/countries'
import { US, ES, FR, PT, CN, TR } from 'country-flag-icons/react/3x2'

export default function Sidebar({ sidebarOpen = true, isDesktop, isMobile = false, onToggleLiveSupport }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [casinoOpen, setCasinoOpen] = useState(false)
  const [originalsOpen, setOriginalsOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState('English')

  // Determine active link based on current route
  const isLinkActive = (path) => {
    return location.pathname === path
  }

  // Create flag components mapping
  const flagComponents = { US, ES, FR, PT, CN, TR }
  
  // Generate languages with flag components
  const languages = languageData.map(lang => ({
    ...lang,
    flag: React.createElement(flagComponents[lang.countryCode], { style: { width: '20px', height: '15px' } })
  }))

  // First section navigation items
  const navigationItems = [
    { name: 'Home', icon: <FiHome />, path: '/' },
    { name: 'Favourite', icon: <FiHeart />, path: '/favourite' },
    { name: 'Recently Played', icon: <FiClock />, path: '/recent' },
    // { name: 'New Releases', icon: <FiStar />, path: '/new' }
  ]

  // Casino dropdown items
  const casinoItems = [
    { name: 'Slots', icon: <FiGrid />, path: '/casino/slots' },
    { name: 'Blackjack', icon: <FiSquare />, path: '/casino/blackjack' },
    { name: 'Baccarat', icon: <FiTriangle />, path: '/casino/baccarat' },
    { name: 'Game Shows', icon: <FiMonitor />, path: '/casino/shows' },
    { name: 'Live Casino', icon: <FiPlay />, path: '/casino/live' }
  ]

  // Originals dropdown items
  const originalsItems = [
    { name: 'Crash', icon: <FiZap />, path: '/originals/crash' },
    { name: 'Mines', icon: <FiCircle />, path: '/originals/mines' },
    { name: 'Plinko', icon: <FiTrendingUp />, path: '/originals/plinko' },
    { name: 'Dice', icon: <FiSquare />, path: '/originals/dice' },
    { name: 'Keno', icon: <FiTarget />, path: '/originals/keno', isNew: true },
    { name: 'Hilo', icon: <FiStar />, path: '/originals/hilo' },
    { name: 'Limbo', icon: <FiTarget />, path: '/originals/limbo' }
  ]

  const handleLinkClick = (path) => {
    navigate(path)
  }

  const handleLanguageSelect = (language) => {
    setActiveLanguage(language.name)
    setLanguageOpen(false)
  }

  const renderNavItem = (item, onClick, isSubItem = false) => {
    const isActive = isLinkActive(item.path)
    
    return (
      <div
        key={item.name}
        onClick={() => onClick && onClick(item.path)}
        className={`cursor-pointer py-3 mx-2 my-1 rounded-lg min-h-[44px] transition-all duration-200 border-l-4 flex items-center ${
          sidebarOpen ? 'px-0' : 'px-0'
        } ${isActive ? 'border-l-4' : 'border-l-4'}`}
        style={{
          background: isActive 
            ? 'linear-gradient(90deg, var(--active-bg), var(--tertiary-bg))'
            : 'transparent',
          boxShadow: isActive 
            ? '0 2px 8px var(--shadow-purple), inset 0 1px 0 var(--border-light)'
            : 'none',
          borderLeftColor: isActive ? 'var(--accent-purple)' : 'transparent'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.target.style.backgroundColor = 'var(--hover-bg)'
            e.target.style.borderLeftColor = 'var(--accent-purple-light)'
            e.target.style.boxShadow = '0 4px 12px var(--shadow-purple), 0 2px 4px var(--shadow-dark)'
            e.target.style.transform = 'translateX(4px)'
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.borderLeftColor = 'transparent'
            e.target.style.boxShadow = 'none'
            e.target.style.transform = 'translateX(0)'
          }
        }}
      >
        <div 
          className="flex items-center justify-center w-12 h-4 text-lg transition-all duration-200"
          style={{ 
            color: isActive ? 'var(--accent-purple-light)' : 'var(--text-medium)'
          }}
        >
          {item.icon}
        </div>
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <span 
              className={`${isSubItem ? 'text-xs' : 'text-sm'} font-normal`}
              style={{ 
                color: isActive ? 'var(--text-light)' : 'var(--text-medium)'
              }}
            >
              {item.name}
            </span>
            {item.isNew && (
              <span 
                className="text-xs px-2 py-1 rounded-md font-bold"
                style={{ 
                  backgroundColor: 'var(--success-green)', 
                  color: 'var(--primary-bg)'
                }}
              >
                New
              </span>
            )}
          </div>
        )}
      </div>
    )
  }

  const renderButtonItem = (item, onClick, isSubItem = false) => {
    return (
      <div
        key={item.name}
        onClick={onClick}
        className={`cursor-pointer py-3 mx-2 my-1 rounded-lg min-h-[44px] transition-all duration-200 border-l-4 flex items-center ${
          sidebarOpen ? 'px-0' : 'px-0'
        }`}
        style={{
          background: 'transparent',
          boxShadow: 'none',
          borderLeftColor: 'transparent'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'var(--hover-bg)'
          e.target.style.borderLeftColor = 'var(--accent-purple-light)'
          e.target.style.boxShadow = '0 4px 12px var(--shadow-purple), 0 2px 4px var(--shadow-dark)'
          e.target.style.transform = 'translateX(4px)'
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent'
          e.target.style.borderLeftColor = 'transparent'
          e.target.style.boxShadow = 'none'
          e.target.style.transform = 'translateX(0)'
        }}
      >
        <div 
          className="flex items-center justify-center w-12 h-4 text-lg transition-all duration-200"
          style={{ 
            color: 'var(--text-medium)'
          }}
        >
          {item.icon}
        </div>
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <span 
              className={`${isSubItem ? 'text-xs' : 'text-sm'} font-normal`}
              style={{ 
                color: 'var(--text-medium)'
              }}
            >
              {item.name}
            </span>
          </div>
        )}
      </div>
    )
  }

  const renderDropdownHeader = (title, icon, isOpen, onToggle) => (
    <div
      onClick={onToggle}
      className={`cursor-pointer py-3 mx-2 my-2 rounded-lg min-h-[48px] transition-all duration-200 flex items-center ${
        sidebarOpen ? 'px-2' : 'px-2'
      }`}
      style={{
        backgroundColor: 'var(--tertiary-bg)',
        boxShadow: '0 2px 6px var(--shadow-dark), inset 0 1px 0 var(--border-light)'
      }}
      onMouseEnter={(e) => {
        e.target.style.borderLeftColor = 'var(--accent-purple-light)'
        e.target.style.boxShadow = '0 4px 12px var(--shadow-purple), 0 2px 6px var(--shadow-dark)'
        e.target.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        e.target.style.borderLeftColor = 'transparent'
        e.target.style.boxShadow = '0 2px 6px var(--shadow-dark), inset 0 1px 0 var(--border-light)'
        e.target.style.transform = 'translateX(0)'
      }}
    >
      <div 
        className="flex items-center justify-center w-10 h-4 text-lg"
        style={{ color: 'var(--text-light)' }}
      >
        {icon}
      </div>
      {sidebarOpen && (
        <>
          <span 
            className="text-sm font-semibold flex-1 ml-2"
            style={{ color: 'var(--text-light)', boxShadow: "none" }}
          >
            {title}
          </span>
          <div 
            className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            style={{ color: 'var(--text-medium)', boxShadow: "none" }}
          >
            <FiChevronRight />
          </div>
        </>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[999]"
        />
      )}
      
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-64px)] border-r transition-all duration-300 overflow-y-auto overflow-x-hidden z-[1000] ${
          isMobile ? 'w-screen' : (sidebarOpen ? 'w-[250px]' : 'w-[75px]')
        } ${isDesktop ? 'pb-0' : 'pb-20'}`}
        style={{
          backgroundColor: 'var(--secondary-bg)',
          borderRightColor: 'var(--border-color)',
          boxShadow: isMobile ? '0 0 20px var(--shadow-dark)' : '2px 0 8px var(--shadow-dark)'
        }}
      >
        <div className="py-3">
          {/* First Section - Main Navigation */}
          <div className="mb-6">
            {navigationItems.map((item) => 
              renderNavItem(item, handleLinkClick)
            )}
          </div>
          
          <div 
            className={`border-t mx-4 my-6 opacity-60 ${sidebarOpen ? 'mx-8' : 'mx-2'}`}
            style={{ borderTopColor: 'var(--border-light)' }}
          />
          
          {/* Second Section - Game Categories */}
          <div className="mb-6">
            {renderDropdownHeader('Casino', <FiGrid />, casinoOpen, () => setCasinoOpen(!casinoOpen))}
            
            {casinoOpen && sidebarOpen && (
              <div 
                className="py-2 mx-2 rounded-lg"
                style={{ backgroundColor: 'var(--primary-bg)' }}
              >
                {casinoItems.map((item) => {
                  const isActive = isLinkActive(item.path)
                  return (
                    <div
                      key={item.name}
                      onClick={() => handleLinkClick(item.path)}
                      className={`cursor-pointer py-2 mx-2 my-1 rounded-lg min-h-[40px] transition-all duration-200 border-l-4 flex items-center`}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(90deg, var(--active-bg), var(--tertiary-bg))'
                          : 'transparent',
                        boxShadow: isActive 
                          ? '0 2px 8px var(--shadow-purple), inset 0 1px 0 var(--border-light)'
                          : 'none',
                        borderLeftColor: isActive ? 'var(--accent-purple)' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'var(--hover-bg)'
                          e.target.style.borderLeftColor = 'var(--accent-purple-light)'
                          e.target.style.boxShadow = '0 4px 12px var(--shadow-purple), 0 2px 4px var(--shadow-dark)'
                          e.target.style.transform = 'translateX(4px)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'transparent'
                          e.target.style.borderLeftColor = 'transparent'
                          e.target.style.boxShadow = 'none'
                          e.target.style.transform = 'translateX(0)'
                        }
                      }}
                    >
                      <div 
                        className="flex items-center justify-center w-12 h-8 text-base transition-all duration-200"
                        style={{ 
                          color: isActive ? 'var(--accent-purple-light)' : 'var(--text-medium)'
                        }}
                      >
                        {item.icon}
                      </div>
                      <span 
                        className={`text-xs ml-2 ${isActive ? 'font-semibold' : 'font-normal'}`}
                        style={{ 
                          color: isActive ? 'var(--text-light)' : 'var(--text-medium)'
                        }}
                      >
                        {item.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}

            {renderDropdownHeader('Originals', <FiStar />, originalsOpen, () => setOriginalsOpen(!originalsOpen))}
            
            {originalsOpen && sidebarOpen && (
              <div 
                className="py-2 mx-2 rounded-lg"
                style={{ backgroundColor: 'var(--primary-bg)' }}
              >
                {originalsItems.map((item) => {
                  const isActive = isLinkActive(item.path)
                  return (
                    <div
                      key={item.name}
                      onClick={() => handleLinkClick(item.path)}
                      className={`cursor-pointer py-2 mx-2 my-1 rounded-lg min-h-[40px] transition-all duration-200 border-l-4 flex items-center`}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(90deg, var(--active-bg), var(--tertiary-bg))'
                          : 'transparent',
                        boxShadow: isActive 
                          ? '0 2px 8px var(--shadow-purple), inset 0 1px 0 var(--border-light)'
                          : 'none',
                        borderLeftColor: isActive ? 'var(--accent-purple)' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'var(--hover-bg)'
                          e.target.style.borderLeftColor = 'var(--accent-purple-light)'
                          e.target.style.boxShadow = '0 4px 12px var(--shadow-purple), 0 2px 4px var(--shadow-dark)'
                          e.target.style.transform = 'translateX(4px)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.backgroundColor = 'transparent'
                          e.target.style.borderLeftColor = 'transparent'
                          e.target.style.boxShadow = 'none'
                          e.target.style.transform = 'translateX(0)'
                        }
                      }}
                    >
                      <div 
                        className="flex items-center justify-center w-12 h-8 text-base transition-all duration-200"
                        style={{ 
                          color: isActive ? 'var(--accent-purple-light)' : 'var(--text-medium)'
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <span 
                          className={`text-xs ${isActive ? 'font-semibold' : 'font-normal'}`}
                          style={{ 
                            color: isActive ? 'var(--text-light)' : 'var(--text-medium)'
                          }}
                        >
                          {item.name}
                        </span>
                        {item.isNew && (
                          <span 
                            className="text-xs px-2 py-0.5 rounded-md font-bold"
                            style={{ 
                              backgroundColor: 'var(--success-green)', 
                              color: 'var(--primary-bg)'
                            }}
                          >
                            New
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div 
            className={`border-t mx-4 my-6 opacity-60 ${sidebarOpen ? 'mx-8' : 'mx-2'}`}
            style={{ borderTopColor: 'var(--border-light)' }}
          />
          
          {/* Third Section - Utilities */}
          <div>
            {renderNavItem({ name: 'Reward', icon: <FiGift />, path: '/reward' }, handleLinkClick)}
            
            {renderButtonItem({ name: 'Live Support', icon: <FiHeadphones /> }, onToggleLiveSupport)}

            {/* Language Dropdown */}
            {renderDropdownHeader(
              `Language: ${activeLanguage}`, 
              <FiGlobe />, 
              languageOpen, 
              () => setLanguageOpen(!languageOpen)
            )}
            
            {languageOpen && sidebarOpen && (
              <div 
                className="py-2 mx-2 rounded-lg"
                style={{ backgroundColor: 'var(--primary-bg)' }}
              >
                {languages.map((language) => (
                  <div
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={`cursor-pointer py-2 mx-2 my-1 rounded-lg min-h-[40px] transition-all duration-200 border-l-4 flex items-center`}
                    style={{
                      background: activeLanguage === language.name 
                        ? 'linear-gradient(90deg, var(--active-bg), var(--tertiary-bg))'
                        : 'transparent',
                      borderLeftColor: activeLanguage === language.name ? 'var(--accent-purple)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (activeLanguage !== language.name) {
                        e.target.style.backgroundColor = 'var(--hover-bg)'
                        e.target.style.borderLeftColor = 'var(--accent-purple-light)'
                        e.target.style.boxShadow = '0 4px 12px var(--shadow-purple), 0 2px 4px var(--shadow-dark)'
                        e.target.style.transform = 'translateX(4px)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeLanguage !== language.name) {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.borderLeftColor = 'transparent'
                        e.target.style.boxShadow = 'none'
                        e.target.style.transform = 'translateX(0)'
                      }
                    }}
                  >
                    <div className="flex items-center justify-center w-12 h-8">
                      {language.flag}
                    </div>
                    <span 
                      className={`text-sm ml-2 ${activeLanguage === language.name ? 'font-semibold' : 'font-normal'}`}
                      style={{ 
                        color: activeLanguage === language.name ? 'var(--text-light)' : 'var(--text-medium)'
                      }}
                    >
                      {language.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
