export default function CategoryFilter({ tournaments, selectedSport, setSelectedSport }) {
  const sports = ["All", ...new Set(tournaments.map(t => t.sport))]

 
}