function InfoTab({ tournament }) {
  return (
    <div className="text-white">
      <p className="text-white/80 mb-4 leading-relaxed">{tournament.description}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
          <p className="font-semibold text-white/80 mb-1">Date</p>
          <p className="text-white font-bold">{tournament.date}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
          <p className="font-semibold text-white/80 mb-1">Location</p>
          <p className="text-white font-bold">{tournament.location}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoTab