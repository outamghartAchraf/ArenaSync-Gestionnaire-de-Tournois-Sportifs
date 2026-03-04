import { useState } from "react"
import TournamentList from "../components/TournamentList"
import { filterByCategory } from "../services/dataFilter"
import CategoryFilter from "../components/CategoryFilter"

function Home({tournaments}) {
    const [selectedSport, setSelectedSport] = useState("All")

    const filteredTournaments = filterByCategory(tournaments, selectedSport)



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pb-24">
   
      <div className="flex justify-between items-center px-5 py-2 text-white text-sm font-semibold"></div>

  
      <div className="px-5 py-3">
    
        <div className="flex justify-between items-start mb-5">
          <h1 className="text-2xl font-bold text-white leading-tight">
            Good Morning,<br />Samuel Walker!
          </h1>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition">
              <i className="fas fa-bell"></i>
            </button>
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-white/30"
            />
          </div>
        </div>

            <CategoryFilter
          tournaments={tournaments}
          selectedSport={selectedSport}
          setSelectedSport={setSelectedSport}
        />

        <TournamentList tournaments={filteredTournaments} />
    </div>
      
      


    </div>
  )
}

export default Home