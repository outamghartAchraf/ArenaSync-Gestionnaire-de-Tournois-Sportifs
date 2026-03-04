export default function CategoryFilter({ tournaments, selectedSport, setSelectedSport }) {
  const sports = ["All", ...new Set(tournaments.map(t => t.sport))]

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {sports.map(sport => (
        <button
          key={sport}
          onClick={() => setSelectedSport(sport)}
          className={`px-4 py-1 rounded-full border font-semibold transition ${
            selectedSport === sport
              ? "bg-white text-blue-800"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          {sport}
        </button>
      ))}
    </div>
  )
}