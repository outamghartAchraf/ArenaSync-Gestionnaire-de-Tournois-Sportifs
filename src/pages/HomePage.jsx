import { useState } from "react";
import TournamentList from "../components/TournamentList";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function Home({ tournaments }) {
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = tournaments.filter((t) => {

    const sportMatch = selectedSport === "All" || t.sport === selectedSport;

    const searchMatch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.location.toLowerCase().includes(searchQuery.toLowerCase());

    return sportMatch && searchMatch;
  });


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pb-24">
      <div className="flex justify-between items-center px-5 py-2 text-white text-sm font-semibold"></div>

      <div className="px-5 py-3">
         <Header />
         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <CategoryFilter
          tournaments={tournaments}
          selectedSport={selectedSport}
          setSelectedSport={setSelectedSport}
        />

        <TournamentList tournaments={filtered} />
      </div>
    </div>
  );
}

export default Home;
