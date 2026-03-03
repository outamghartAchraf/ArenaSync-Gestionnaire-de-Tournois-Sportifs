import { useParams, useNavigate } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
 
import { tournaments } from '../data/tournamentDB'

export default function TournamentDetailsPage() {
  const { id } = useParams()  
  const navigate = useNavigate()

  // تلقى التورنواي حسب id
  const tournament = tournaments.find(t => t.id === Number(id))

  if (!tournament) return <p className="p-6 text-white">Tournament not found</p>

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 pb-24">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-5 py-2 text-white text-sm font-semibold">
            {tournament.title}
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 px-5 py-3">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <h2 className="text-lg font-semibold text-white">Tournament</h2>
      </div>
 
    </div>
  )
}