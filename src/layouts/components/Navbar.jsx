import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FiSearch, FiGift, FiMessageCircle, FiAlignLeft, FiX, FiGlobe, FiChevronRight } from 'react-icons/fi'
import { languageData } from '../../constants/countries'
import { US, ES, FR, PT, CN, TR } from 'country-flag-icons/react/3x2'

export default function Navbar({ sidebarOpen = true, onToggleSidebar, isDesktop = true,chatOpen= false , onToggleChat }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [chatSectionOpen, setChatSectionOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState('English')

  // Determine active tab based on current route
  const getActiveTab = () => {
    if (location.pathname === '/casino') return 'Casino'
    if (location.pathname === '/sport') return 'Sport'
    return null
  }

  const activeTab = getActiveTab()

  // Create flag components mapping
  const flagComponents = { US, ES, FR, PT, CN, TR }
  
  // Generate languages with flag components
  const languages = languageData.map(lang => ({
    ...lang,
    flag: React.createElement(flagComponents[lang.countryCode], { style: { width: '20px', height: '15px' } })
  }))

  const handleLanguageSelect = (language) => {
    setActiveLanguage(language.name)
    setLanguageOpen(false)
  }

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[1002] h-16 border-b transition-all duration-300"
      style={{
        backgroundColor: 'var(--secondary-bg)',
        borderBottomColor: 'var(--border-color)',
        boxShadow: '0 2px 8px rgba(106, 13, 173, 0.1)'
      }}
    >
      <div className="flex items-center h-full">
        {isDesktop && (
          <div 
            className={`flex items-center justify-center gap-2 h-16 border-r transition-all duration-300 ${
              sidebarOpen ? 'w-[250px]' : 'w-[75px]'
            }`}
            style={{ borderRightColor: 'var(--border-color)' }}
          >
            <button 
              onClick={onToggleSidebar}
              className="p-0 m-0 text-xl transition-all duration-200 hover:scale-125 active:scale-110"
              style={{ 
                color: 'var(--text-light)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--accent-purple)10'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              <FiAlignLeft />
            </button>

            {sidebarOpen && (
              <div 
                className="flex rounded-lg p-0.5 border transition-opacity duration-300"
                style={{
                  backgroundColor: 'var(--primary-bg)',
                  borderColor: 'var(--border-color)',
                  opacity: sidebarOpen ? 1 : 0
                }}
              >
                <button 
                  onClick={() => navigate('/casino')}
                  className={`min-w-[70px] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === 'Casino' ? 'scale-95' : 'scale-100'
                  } hover:scale-100`}
                  style={{
                    color: activeTab === 'Casino' ? 'white' : 'var(--text-dark)',
                    backgroundImage: activeTab === 'Casino' ? 'url("/assets/sidebar/casino-poker-cards-green-en.jpg")' : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    fontWeight: activeTab === 'Casino' ? 'bold' : 'normal',
                    textShadow: activeTab === 'Casino' ? '2px 2px 4px rgba(0,0,0,0.9)' : 'none',
                    boxShadow: activeTab === 'Casino' ? '0 4px 12px rgba(106, 13, 173, 0.3)' : '0 2px 8px rgba(106, 13, 173, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'Casino') {
                      e.target.style.backgroundColor = 'var(--accent-purple)10'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'Casino') {
                      e.target.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  Casino
                </button>
                
                <button 
                  onClick={() => navigate('/sport')}
                  className={`min-w-[70px] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === 'Sport' ? 'scale-95' : 'scale-100'
                  } hover:scale-100`}
                  style={{
                    color: activeTab === 'Sport' ? 'white' : 'var(--text-dark)',
                    backgroundImage: activeTab === 'Sport' ? 'url("/assets/sidebar/sports-balls-orange-en.jpg")' : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    fontWeight: activeTab === 'Sport' ? 'bold' : 'normal',
                    textShadow: activeTab === 'Sport' ? '2px 2px 4px rgba(0,0,0,0.9)' : 'none',
                    boxShadow: activeTab === 'Sport' ? '0 4px 12px rgba(106, 13, 173, 0.3)' : '0 2px 8px rgba(106, 13, 173, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'Sport') {
                      e.target.style.backgroundColor = 'var(--accent-purple)10'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'Sport') {
                      e.target.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  Sport
                </button>
              </div>
            )}
          </div>
        )}

        {/* Second Section - Main content */}
        <div className={`flex items-center justify-between px-4 h-16 transition-all duration-300 flex-1`}>
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Brand Logo" 
              className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => navigate('/')}
            />
          </div>

      
            <div className="flex items-center gap-2">
              {isDesktop && (
                <button 
                  className="p-2 border rounded-md scale-90 transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-light)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--accent-purple)'
                    e.target.style.backgroundColor = 'var(--accent-purple)10'
                    e.target.style.boxShadow = '0 2px 8px rgba(106, 13, 173, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border-color)'
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  <FiSearch />
                </button>
              )}
              
              <button 
                className="p-2 border rounded-md scale-90 transition-all duration-200 hover:scale-110"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-light)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--accent-purple)'
                  e.target.style.backgroundColor = 'var(--accent-purple)10'
                  e.target.style.boxShadow = '0 2px 8px rgba(106, 13, 173, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-color)'
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <FiGift />
              </button>
              
              <button 
                className="px-4 py-2 border rounded-md scale-90 transition-all duration-200 hover:scale-110"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-light)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--accent-purple)'
                  e.target.style.backgroundColor = 'var(--accent-purple)10'
                  e.target.style.boxShadow = '0 2px 8px rgba(106, 13, 173, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-color)'
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Login
              </button>
              
              <button 
                className="px-4 py-2 rounded-md scale-90 transition-all duration-200 hover:scale-105 text-white font-medium"
                style={{
                  backgroundColor: 'var(--accent-purple)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 4px 12px rgba(106, 13, 173, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none'
                }}
              >
                Register
              </button>
              {isDesktop && (

                <button 
                  onClick={onToggleChat}
                  className="p-2 border rounded-md scale-90 transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: chatOpen ? 'var(--accent-purple)' : 'var(--text-light)',
                    backgroundColor: chatOpen ? 'var(--tertiary-bg)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--accent-purple)'
                    e.target.style.backgroundColor = 'var(--accent-purple)10'
                    e.target.style.boxShadow = '0 2px 8px rgba(106, 13, 173, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border-color)'
                    e.target.style.backgroundColor = chatOpen ? 'var(--tertiary-bg)' : 'transparent'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  <FiMessageCircle />
                </button>
              )}
 
        
            </div>
          
        </div>

        {/* Third Section - Language Dropdown */}
        { isDesktop &&  chatOpen && (
          <div 
            className={`flex items-center gap-2 px-4 h-16 border-l relative transition-all duration-300 ${
              isDesktop ? 'w-80' : 'w-full'
            }`}
            style={{
              borderLeftColor: 'var(--border-color)',
              backgroundColor: 'var(--secondary-bg)'
            }}
          >
            <div
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center flex-1 p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-opacity-80"
              style={{ backgroundColor: 'var(--tertiary-bg)' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--tertiary-bg)'
              }}
            >
              <div className="flex items-center justify-center w-8 h-8 mr-3">
                <FiGlobe className="text-base" style={{ color: 'var(--text-light)' }} />
              </div>
              <span 
                className="text-sm font-medium flex-1"
                style={{ color: 'var(--text-light)' }}
              >
                Language: {activeLanguage}
              </span>
              <div 
                className={`transition-transform duration-200 ${languageOpen ? 'rotate-90' : 'rotate-0'}`}
                style={{ color: 'var(--text-medium)' }}
              >
                <FiChevronRight />
              </div>
            </div>

            <button 
              onClick={onToggleChat}
              className="p-2 transition-all duration-200 hover:rotate-90 rounded-md"
              style={{ color: 'var(--text-medium)' }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--text-light)'
                e.target.style.backgroundColor = 'var(--hover-bg)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-medium)'
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              <FiX />
            </button>

            {/* Language Dropdown */}
            {languageOpen && (
              <div
                className="absolute top-16 left-0 right-0 border-t-0 rounded-b-lg border max-h-80 overflow-y-auto z-50"
                style={{
                  backgroundColor: 'var(--primary-bg)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 12px var(--shadow-dark)'
                }}
              >
                {languages.map((language) => (
                  <div
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    className={`flex items-center cursor-pointer p-3 mx-2 my-1 rounded-md transition-all duration-200 border-l-4 ${
                      activeLanguage === language.name ? 'font-semibold' : 'font-normal'
                    }`}
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
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeLanguage !== language.name) {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.borderLeftColor = 'transparent'
                      }
                    }}
                  >
                    <div className="flex items-center justify-center w-10 h-6 mr-3">
                      {language.flag}
                    </div>
                    <span 
                      className="text-sm"
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
        )}
      </div>
    </div>
  )
}
