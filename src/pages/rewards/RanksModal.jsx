import React from 'react';
import { FiX, FiAward } from 'react-icons/fi';

const RANKS_DATA = [
  { name: 'Bronze I', wager: 4000 },
  { name: 'Bronze II', wager: 11000 },
  { name: 'Bronze III', wager: 22000 },
  { name: 'Bronze IV', wager: 36000 },
  { name: 'Silver I', wager: 50000 },
  { name: 'Silver II', wager: 65000 },
  { name: 'Silver III', wager: 80000 },
  { name: 'Silver IV', wager: 95000 },
  { name: 'Gold I', wager: 110000 },
  { name: 'Gold II', wager: 150000 },
  { name: 'Gold III', wager: 225000 },
  { name: 'Gold IV', wager: 350000 },
  { name: 'Gold V', wager: 500000 },
  { name: 'Platinum I', wager: 700000 },
  { name: 'Platinum II', wager: 1300000 },
  { name: 'Platinum III', wager: 2500000 },
  { name: 'Platinum IV', wager: 4500000 },
  { name: 'Platinum V', wager: 7000000 },
  { name: 'Diamond I', wager: 10000000 },
  { name: 'Diamond II', wager: 25000000 },
  { name: 'Diamond III', wager: 50000000 },
  { name: 'Diamond IV', wager: 100000000 },
  { name: 'Diamond V', wager: 250000000 }
];

const getRankColor = (rankName) => {
  if (rankName.includes('Bronze')) return 'from-amber-700 to-amber-900';
  if (rankName.includes('Silver')) return 'from-gray-400 to-gray-600';
  if (rankName.includes('Gold')) return 'from-yellow-400 to-yellow-600';
  if (rankName.includes('Platinum')) return 'from-gray-300 to-gray-500';
  if (rankName.includes('Diamond')) return 'from-blue-400 to-blue-600';
  return 'from-gray-400 to-gray-600';
};

const getRankIcon = (rankName) => {
  return <FiAward className="w-8 h-8" />;
};

export default function RanksModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-59760 flex items-center justify-center p-4">
      <div 
        className="rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
        style={{
          backgroundColor: 'var(--secondary-bg)',
          boxShadow: '0 20px 50px var(--shadow-dark)'
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-6 border-b"
          style={{
            borderBottomColor: 'var(--border-color)',
            background: 'linear-gradient(135deg, var(--accent-purple), #8b5cf6)'
          }}
        >
          <div>
            <h2 className="text-2xl font-bold text-white">All Ranks</h2>
            <p className="text-purple-100 mt-1">Complete wager requirements to unlock higher ranks</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors duration-200"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <FiX 
              className="w-6 h-6 text-white" 
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {RANKS_DATA.map((rank, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border hover:shadow-lg transition-all duration-300 group"
                style={{
                  backgroundColor: 'var(--tertiary-bg)',
                  borderColor: 'var(--border-color)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px var(--shadow-purple)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {/* Gradient background */}
                <div 
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${getRankColor(rank.name) === 'from-amber-700 to-amber-900' ? '#b45309, #d97706' : 
                                                         getRankColor(rank.name) === 'from-gray-400 to-gray-600' ? '#6b7280, #9ca3af' : 
                                                         getRankColor(rank.name) === 'from-yellow-400 to-yellow-600' ? '#d97706, #fbbf24' : 
                                                         getRankColor(rank.name) === 'from-gray-300 to-gray-500' ? '#9ca3af, #d1d5db' : 
                                                         'var(--accent-purple), #a855f7'})`
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative p-4">
                  {/* Rank icon and name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="p-2 rounded-lg text-white"
                      style={{
                        background: `linear-gradient(135deg, ${getRankColor(rank.name) === 'from-amber-700 to-amber-900' ? '#b45309, #d97706' : 
                                                              getRankColor(rank.name) === 'from-gray-400 to-gray-600' ? '#6b7280, #9ca3af' : 
                                                              getRankColor(rank.name) === 'from-yellow-400 to-yellow-600' ? '#d97706, #fbbf24' : 
                                                              getRankColor(rank.name) === 'from-gray-300 to-gray-500' ? '#9ca3af, #d1d5db' : 
                                                              'var(--accent-purple), #a855f7'})`
                      }}
                    >
                      {getRankIcon(rank.name)}
                    </div>
                    <div>
                      <h3 
                        className="font-bold"
                        style={{ color: 'var(--text-light)' }}
                      >
                        {rank.name}
                      </h3>
                      <p 
                        className="text-xs"
                        style={{ color: 'var(--text-medium)' }}
                      >
                        Rank {index + 1}
                      </p>
                    </div>
                  </div>

                  {/* Wager requirement */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm"
                        style={{ color: 'var(--text-medium)' }}
                      >
                        Required Wager:
                      </span>
                    </div>
                    <div 
                      className="text-xl font-bold"
                      style={{ color: 'var(--text-light)' }}
                    >
                      {formatCurrency(rank.wager)}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div 
                    className="mt-4 pt-3 border-t"
                    style={{ borderTopColor: 'var(--border-color)' }}
                  >
                    <div 
                      className="flex items-center justify-between text-xs"
                      style={{ color: 'var(--text-medium)' }}
                    >
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <div 
                      className="mt-1 w-full rounded-full h-2"
                      style={{ backgroundColor: 'var(--primary-bg)' }}
                    >
                      <div 
                        className="h-2 rounded-full w-0"
                        style={{
                          background: 'linear-gradient(90deg, var(--accent-purple), #8b5cf6)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer info */}
          <div 
            className="mt-8 p-4 rounded-xl"
            style={{ backgroundColor: 'var(--primary-bg)' }}
          >
            <h3 
              className="font-semibold mb-2"
              style={{ color: 'var(--text-light)' }}
            >
              Rank Benefits
            </h3>
            <ul 
              className="text-sm space-y-1"
              style={{ color: 'var(--text-medium)' }}
            >
              <li>• Higher rakeback percentages</li>
              <li>• Exclusive bonuses and promotions</li>
              <li>• Priority customer support</li>
              <li>• Special tournament access</li>
              <li>• Increased withdrawal limits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
