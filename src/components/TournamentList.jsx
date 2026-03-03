import TournamentCard from './TournamentCard';

export default function TournamentList({ tournaments}) {
  return (
    <div className="space-y-4">
      {tournaments.length > 0 ? (
        tournaments.map(tournament => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
           
          />
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">No tournaments found</p>
        </div>
      )}
    </div>
  );
}