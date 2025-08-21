import React, { useState } from 'react'
import { FiSearch, FiMessageCircle, FiAlignLeft } from 'react-icons/fi'

export default function NavBottomTabs({ onToggleSidebar, onToggleChat }) {
  const [activeTab, setActiveTab] = useState('Casino')

  const tabItems = [
    { 
      name: 'Menu', 
      icon: <FiAlignLeft className="text-xl" />,
      onClick: onToggleSidebar
    },
    { 
      name: 'Casino', 
      icon: <div className="text-lg font-bold">🎰</div>,
      onClick: () => setActiveTab('Casino')
    },
    { 
      name: 'Sport', 
      icon: <div className="text-lg font-bold">⚽</div>,
      onClick: () => setActiveTab('Sport')
    },
    { 
      name: 'Chat', 
      icon: <FiMessageCircle className="text-xl" />,
      onClick: onToggleChat
    },
    { 
      name: 'Search', 
      icon: <FiSearch className="text-xl" />,
      onClick: () => console.log('Search clicked')
    }
  ]

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[1100] border-t"
      style={{
        backgroundColor: 'var(--secondary-bg)',
        borderTopColor: 'var(--border-color)',
        boxShadow: '0 -2px 8px var(--shadow-dark)'
      }}
    >
      <div className="flex justify-around items-center h-16 px-2">
        {tabItems.map((item, index) => {
          const isActive = (item.name === 'Casino' || item.name === 'Sport') ? activeTab === item.name : false
          
          return (
            <button
              key={index}
              onClick={item.onClick}
              className="flex flex-col rounded-2xl items-center justify-center px-2 h-full transition-all duration-200 ease-in-out transform active:scale-95"
              onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--hover-bg)'
                  e.currentTarget.style.color = 'var(--text-light)'
                  e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--text-medium)'
                  e.currentTarget.style.transform = 'scale(1)'
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)'
              }}
              onMouseUp={(e) => {
                if (isActive) {
                  e.currentTarget.style.transform = 'scale(1)'
                } else {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }
              }}
            >
              <div className="mb-1 flex items-center justify-center h-6 transition-transform duration-150">
                {item.icon}
              </div>
              <span 
                className="text-xs font-medium transition-colors duration-200"
                style={{
                  color: 'inherit'
                }}
              >
                {item.name}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
