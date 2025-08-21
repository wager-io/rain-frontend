import React from 'react'
import RecentWins from '../../components/casino/RecentWins'
import InhouseGames from '../home/sections/InHouseGames'
import BetsTable from '../../components/betsTable/Layout'
import GameCard from './GameCard'

export default function CasinoIndex() {
  return (
    <div className="px-4 md:px-4 lg:px-4 py-8">
        <GameCard />
        <RecentWins />
        <InhouseGames />
        <BetsTable />
    </div>
  )
}
