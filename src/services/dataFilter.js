export function filterByCategory(tournaments, selectedSport) {
  if (selectedSport === "All") return tournaments
  return tournaments.filter(t => t.sport === selectedSport)
}