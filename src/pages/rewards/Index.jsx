import React, { useState } from 'react';
import { FiInfo, FiAward, FiClock, FiCalendar, FiDollarSign, FiGift } from 'react-icons/fi';
import RanksModal from './RanksModal';

export default function Rewards() {
  const [showRanksModal, setShowRanksModal] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Sample data - you can replace with actual data from your backend
  const currentWagered = 0;
  const nextRankWager = 4000;
  const currentRank = 'Unranked';
  const nextRank = 'Bronze I';
  const progressPercentage = (currentWagered / nextRankWager) * 100;

  const upcomingRanks = [
    { name: 'Bronze I', wager: 4000, color: 'from-amber-700 to-amber-900' },
    { name: 'Bronze II', wager: 11000, color: 'from-amber-700 to-amber-900' },
    { name: 'Bronze III', wager: 22000, color: 'from-amber-700 to-amber-900' },
    { name: 'Silver I', wager: 50000, color: 'from-gray-400 to-gray-600' },
    { name: 'Gold I', wager: 110000, color: 'from-yellow-400 to-yellow-600' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Pending Reload Card */}
      <div 
        className="w-full rounded-2xl border p-6 text-white relative overflow-hidden"
        style={{
            backgroundColor: 'var(--secondary-bg)',
          boxShadow: '0 8px 32px rgba(106, 13, 173, 0.3)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Pending Reload</h2>
              <p className="text-3xl font-bold">{formatCurrency(0)}</p>
            </div>
            <div className="relative">
              <button
                className="p-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}
                onMouseEnter={(e) => {
                  setTooltipVisible(true);
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  setTooltipVisible(false);
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <FiInfo className="w-6 h-6" />
              </button>
              
              {/* Tooltip */}
              {tooltipVisible && (
                <div 
                  className="absolute right-0 top-full mt-2 w-80 text-sm p-4 rounded-lg shadow-xl z-20"
                  style={{
                    backgroundColor: 'var(--primary-bg)',
                    color: 'var(--text-light)',
                    boxShadow: '0 8px 32px var(--shadow-dark)'
                  }}
                >
                  <div 
                    className="absolute -top-1 right-4 w-2 h-2 transform rotate-45"
                    style={{ backgroundColor: 'var(--primary-bg)' }}
                  ></div>
                  Unlocks three times per day for 14 days. Each vault reward expires after 24 hours. Includes a Rakeboost bonus.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reward Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Rakeback', icon: FiDollarSign, color: '#10b981', lightColor: '#34d399' },
          { title: 'Daily', icon: FiClock, color: '#3b82f6', lightColor: '#60a5fa' },
          { title: 'Weekly', icon: FiCalendar, color: 'var(--accent-purple)', lightColor: '#a855f7' },
          { title: 'Monthly', icon: FiGift, color: '#f59e0b', lightColor: '#fbbf24' }
        ].map((reward, index) => (
          <div 
            key={index} 
            className="rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 group"
            style={{
              backgroundColor: 'var(--secondary-bg)',
              borderColor: 'var(--border-color)',
              boxShadow: '0 4px 12px var(--shadow-dark)'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 8px 25px var(--shadow-purple)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 4px 12px var(--shadow-dark)';
            }}
          >
            <div 
              className="h-2"
              style={{ 
                background: `linear-gradient(90deg, ${reward.color}, ${reward.lightColor})`
              }}
            ></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="p-3 rounded-lg text-white"
                  style={{
                    background: `linear-gradient(135deg, ${reward.color}, ${reward.lightColor})`
                  }}
                >
                  <reward.icon className="w-6 h-6" />
                </div>
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: 'var(--text-light)' }}
                >
                  {reward.title}
                </h3>
              </div>
              
              <div className="space-y-2 mb-6">
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-medium)' }}
                >
                  Available rewards
                </p>
                <p 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--text-light)' }}
                >
                  {formatCurrency(0)}
                </p>
              </div>

              <button 
                className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-purple), #8b5cf6)',
                  boxShadow: '0 2px 8px rgba(106, 13, 173, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 4px 12px rgba(106, 13, 173, 0.4)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 2px 8px rgba(106, 13, 173, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rank Progress Section */}
      <div 
        className="rounded-2xl shadow-lg border overflow-hidden"
        style={{
          backgroundColor: 'var(--secondary-bg)',
          borderColor: 'var(--border-color)',
          boxShadow: '0 8px 32px var(--shadow-dark)'
        }}
      >
        <div 
          className="p-6 text-white"
          style={{
            background: 'linear-gradient(135deg, var(--accent-purple), #8b5cf6)'
          }}
        >
          <h2 className="text-2xl font-bold mb-2">Your Rank Progress</h2>
          <p className="text-purple-100">Keep wagering to unlock higher ranks and better rewards</p>
        </div>

        <div className="p-6">
          {/* Progress Stats */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span 
                className="text-lg font-semibold"
                style={{ color: 'var(--text-light)' }}
              >
                {formatCurrency(currentWagered)} / {formatCurrency(nextRankWager)} Wagered
              </span>
              <span 
                className="text-lg font-bold"
                style={{ color: 'var(--accent-purple)' }}
              >
                {Math.round(progressPercentage)}% Completed
              </span>
            </div>

            {/* Progress Bar */}
            <div 
              className="w-full rounded-full h-4 mb-4"
              style={{ backgroundColor: 'var(--tertiary-bg)' }}
            >
              <div 
                className="h-4 rounded-full transition-all duration-500"
                style={{ 
                  width: `${Math.max(2, progressPercentage)}%`,
                  background: 'linear-gradient(90deg, var(--accent-purple), #8b5cf6)'
                }}
              ></div>
            </div>

            {/* Rank Labels */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <FiAward 
                  className="w-4 h-4"
                  style={{ color: 'var(--text-medium)' }}
                />
                <span 
                  className="font-medium"
                  style={{ color: 'var(--text-medium)' }}
                >
                  {currentRank}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span 
                  className="font-medium"
                  style={{ color: 'var(--text-medium)' }}
                >
                  {nextRank}
                </span>
                <FiAward 
                  className="w-4 h-4"
                  style={{ color: 'var(--accent-purple)' }}
                />
              </div>
            </div>
          </div>

          {/* Upcoming Ranks Cards */}
          <div className="mb-6">
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--text-light)' }}
            >
              Upcoming Ranks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {upcomingRanks.map((rank, index) => (
                <div 
                  key={index} 
                  className="rounded-lg p-4 border hover:shadow-md transition-all duration-200 group"
                  style={{
                    backgroundColor: 'var(--tertiary-bg)',
                    borderColor: 'var(--border-color)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 12px var(--shadow-purple)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto`}
                    style={{
                      background: `linear-gradient(135deg, ${rank.color === 'from-amber-700 to-amber-900' ? '#b45309' : 
                                                           rank.color === 'from-gray-400 to-gray-600' ? '#6b7280' : 
                                                           rank.color === 'from-yellow-400 to-yellow-600' ? '#d97706' : 'var(--accent-purple)'}, ${
                                                           rank.color === 'from-amber-700 to-amber-900' ? '#d97706' : 
                                                           rank.color === 'from-gray-400 to-gray-600' ? '#9ca3af' : 
                                                           rank.color === 'from-yellow-400 to-yellow-600' ? '#fbbf24' : '#a855f7'})`
                    }}
                  >
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--text-light)' }}
                    >
                      {rank.name}
                    </h4>
                    <p 
                      className="text-xs"
                      style={{ color: 'var(--text-medium)' }}
                    >
                      {formatCurrency(rank.wager)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="flex-1 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, var(--accent-purple), #8b5cf6)',
                boxShadow: '0 4px 12px rgba(106, 13, 173, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 6px 20px rgba(106, 13, 173, 0.4)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 4px 12px rgba(106, 13, 173, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Claim Ranked up Rewards
            </button>
            <button 
              onClick={() => setShowRanksModal(true)}
              className="flex-1 py-3 px-6 rounded-lg border font-medium transition-all duration-200"
              style={{
                backgroundColor: 'var(--tertiary-bg)',
                color: 'var(--text-light)',
                borderColor: 'var(--border-color)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--hover-bg)';
                e.target.style.borderColor = 'var(--accent-purple)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--tertiary-bg)';
                e.target.style.borderColor = 'var(--border-color)';
              }}
            >
              View All Ranks
            </button>
          </div>
        </div>
      </div>

      {/* Ranks Modal */}
      <RanksModal 
        isOpen={showRanksModal} 
        onClose={() => setShowRanksModal(false)} 
      />
    </div>
  );
}
