import React, { useState, useRef, useEffect } from 'react'
import { FiSend, FiStar, FiDollarSign, FiAward } from 'react-icons/fi'
import { languageData } from '../../constants/countries'
import {  FiX, FiGlobe, FiChevronRight } from 'react-icons/fi'
import { US, ES, FR, PT, CN, TR } from 'country-flag-icons/react/3x2'

export default function PublicChats({ isOpen, isDesktop, onToggleChat , isMobile}) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
        {
      id: 1,
      username: 'Admin',
      content: 'Welcome to the chat! Please follow the community guidelines.',
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      isAdmin: true,
      vipLevel: 5,
      avatar: null
    },
    {
      id: 2,
      username: 'Player123',
      content: 'Just won big on slots! 🎰💰',
      timestamp: new Date(Date.now() - 60000), // 1 minute ago
      isAdmin: false,
      vipLevel: 2,
      avatar: null
    },
    {
      id: 3,
      username: 'HighRoller',
      receiver: 'Player123',
      content: '@Player123 congratulations! Here\'s a tip for you 💎',
      timestamp: new Date(Date.now() - 30000),
      isAdmin: false,
      vipLevel: 4,
      avatar: null,
      isTip: true,
      tipAmount: 50
    }
  ])
  const [languageOpen, setLanguageOpen] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState('English')
  const [mentionUsers, setMentionUsers] = useState([])
  const [mentionFilter, setMentionFilter] = useState('')
  const inputRef = useRef(null)
  const messagesEndRef = useRef(null)

  const flagComponents = { US, ES, FR, PT, CN, TR }
  
  // Generate languages with flag components
  const languages = languageData.map(lang => ({
    ...lang,
    flag: React.createElement(flagComponents[lang.countryCode], { style: { width: '20px', height: '15px' } })
  }))

  // Mock active users
  const activeUsers = [
    { username: 'Player123', vipLevel: 2, lastSeen: 'online' },
    { username: 'HighRoller', vipLevel: 4, lastSeen: 'online' },
    { username: 'LuckyWinner', vipLevel: 1, lastSeen: 'online' },
    { username: 'CasinoKing', vipLevel: 3, lastSeen: 'online' },
    { username: 'SlotMaster', vipLevel: 5, lastSeen: 'online' }
  ]

  const getTimeAgo = (timestamp) => {
    const now = new Date()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'just now'
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    return `${days} day${days > 1 ? 's' : ''} ago`
  }

  const getVipIcon = (vipLevel) => {
    if (vipLevel >= 5) return <FiAward className="text-yellow-400" />
    if (vipLevel >= 3) return <FiStar className="text-purple-400" />
    if (vipLevel >= 1) return <FiDollarSign className="text-green-400" />
    return null
  }

  const getInitials = (username) => {
    return username.charAt(0).toUpperCase()
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setMessage(value)

    // Check for @ mentions
    const atIndex = value.lastIndexOf('@')
    if (atIndex !== -1 && atIndex === value.length - 1) {
      // Just typed @
      setMentionUsers(activeUsers.slice(0, 5))
      setMentionFilter('')
      setShowSuggestions(true)
    } else if (atIndex !== -1 && atIndex < value.length - 1) {
      // Typing after @
      const mentionText = value.substring(atIndex + 1)
      const spaceIndex = mentionText.indexOf(' ')
      if (spaceIndex === -1) {
        const filterText = mentionText.toLowerCase()
        setMentionFilter(filterText)
        const filtered = activeUsers.filter(user => 
          user.username.toLowerCase().includes(filterText)
        ).slice(0, 5)
        setMentionUsers(filtered)
        setShowSuggestions(filtered.length > 0)
      } else {
        setShowSuggestions(false)
      }
    } else {
      setShowSuggestions(false)
    }
  }

  const selectMentionUser = (username) => {
    const atIndex = message.lastIndexOf('@')
    const beforeMention = message.substring(0, atIndex)
    setMessage(`${beforeMention}@${username} `)
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        username: 'You',
        content: message,
        timestamp: new Date(),
        isAdmin: false,
        vipLevel: 1,
        avatar: null
      }
      setMessages([...messages, newMessage])
      setMessage('')
      setShowSuggestions(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const renderMessage = (msg) => {
    const mentionRegex = /@(\w+)/g
    const parts = msg.content.split(mentionRegex)
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // This is a mentioned username
        return (
          <span 
            key={index}
            className="cursor-pointer font-semibold hover:underline"
            style={{ color: 'var(--accent-purple)' }}
            onClick={() => console.log('User clicked:', part)}
          >
            @{part}
          </span>
        )
      }
      return part
    })
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!isOpen) return null

  return (
    <div 
      className={`fixed top-16 right-0 ${!isMobile ? "w-80" : "w-screen" } h-[calc(100vh-64px)] border-l flex flex-col z-[1001] transition-all duration-300`}
      style={{
        backgroundColor: 'var(--secondary-bg)',
        borderLeftColor: 'var(--border-color)',
        boxShadow: '-2px 0 8px var(--shadow-dark)',
        paddingBottom: !isDesktop ?  "60px" : 0,
      }}
    >
  <div 
      className={`flex items-center gap-2 px-4 h-16 border-l relative transition-all duration-300 ${
            !isMobile ? "w-80" : "w-screen"
            }`}
            style={{
              borderLeftColor: 'var(--border-color)',
              backgroundColor: 'var(--secondary-bg)',
                 display: isDesktop ? "none" : "block"
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



      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-1 rounded-lg border-l-4 transition-all duration-200 ${
              msg.isAdmin ? 'border-l-4' : msg.isTip ? 'border-l-4' : 'border-none'
            }`}
            style={{
              backgroundColor: 'var(--tertiary-bg)',
              borderLeftColor: msg.isAdmin 
                ? 'var(--success-green)' 
                : msg.isTip 
                  ? 'var(--accent-purple)' 
                  : '',
              boxShadow: msg.isAdmin || msg.isTip 
                ? '0 2px 8px var(--shadow-purple)' 
                : ''
            }}
          >
            <div className="flex items-start gap-3">
              <div 
                className="w-5 h-5 rounded-full flex mt-2 items-center justify-center text-[8px] font-bold flex-shrink-0"
                style={{ 
                  backgroundColor: 'var(--primary-bg)',
                  color: 'var(--text-light)'
                }}
              >
                {msg.isTip
                  ? getVipIcon(msg.vipLevel) // Show VIP icon for tip messages
                  : (
                    msg.avatar
                      ? <img src={msg.avatar} alt={msg.username} className="w-full h-full rounded-full" />
                      : getInitials(msg.username)
                    )
                }
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                {/* Header with username, VIP, and time */}
                <div className="flex items-center gap-2 mb-1">
                  <button
                    className="font-semibold text-sm hover:underline"
                    style={{ 
                      color: msg.isAdmin ? 'var(--success-green)' : 'var(--text-light)'
                    }}
                    onClick={() => console.log('User profile clicked:', msg.username)}
                  >
                    {msg.username}
                  </button>
                  
                  {getVipIcon(msg.vipLevel)}
                  
                  {msg.isTip && (
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ 
                        backgroundColor: 'var(--accent-purple)',
                        color: 'white'
                      }}
                    >
                      TIP ${msg.tipAmount}
                    </span>
                  )}
                  
                  <span 
                    className="text-xs ml-auto"
                    style={{ color: 'var(--text-dark)' }}
                  >
                    {getTimeAgo(msg.timestamp)}
                  </span>
                </div>

                {/* Message Content */}
                <div 
                  className="text-sm break-words"
                  style={{ color: 'var(--text-medium)' }}
                >
                  {msg.isTip ? (
                    // Custom tip message format
                    <span>
                      {msg.username} sent ${msg.tipAmount?.toFixed(2)} to {msg.receiver}
                    </span>
                  ) : (
                    renderMessage(msg)
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="relative">
        {/* User Suggestions */}
        {showSuggestions && (
          <div 
            className="absolute bottom-full left-4 right-4 mb-2 rounded-lg border max-h-40 overflow-y-auto z-10"
            style={{
              backgroundColor: 'var(--primary-bg)',
              borderColor: 'var(--border-color)',
              boxShadow: '0 -2px 8px var(--shadow-dark)'
            }}
          >
            {mentionUsers.map((user) => (
              <div
                key={user.username}
                onClick={() => selectMentionUser(user.username)}
                className="flex items-center gap-3 p-3 cursor-pointer transition-all duration-200 hover:translate-x-1"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--hover-bg)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                }}
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ 
                    backgroundColor: 'var(--tertiary-bg)',
                    color: 'var(--text-light)'
                  }}
                >
                  {getInitials(user.username)}
                </div>
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-light)' }}
                >
                  {user.username}
                </span>
                {getVipIcon(user.vipLevel)}
                <span 
                  className="text-xs ml-auto"
                  style={{ color: 'var(--success-green)' }}
                >
                  {user.lastSeen}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Input Box */}
        <div 
          className="p-4 border-t"
          style={{ borderTopColor: 'var(--border-color)' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full p-3 pr-12 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'var(--tertiary-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-light)',
                  focusRingColor: 'var(--accent-purple)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-purple)'
                  e.target.style.boxShadow = '0 0 0 2px var(--accent-purple)20'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                style={{
                  color: message.trim() ? 'var(--accent-purple)' : 'var(--text-dark)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (message.trim()) {
                    e.target.style.backgroundColor = 'var(--accent-purple)10'
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                }}
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
