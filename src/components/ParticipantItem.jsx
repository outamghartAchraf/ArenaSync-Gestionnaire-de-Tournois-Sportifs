import StatusBadge from './StatusBadge';

export default function ParticipantItem({ participant }) {
  return (
    <div className="bg-white rounded-xl p-3 flex flex-col items-center text-center hover:shadow-md transition">
      <img
        src={participant.avatar}
        alt={participant.name}
        className="w-14 h-14 rounded-full mb-2 object-cover"
      />
      <h4 className="text-xs font-semibold text-gray-900 mb-1 line-clamp-2">
        {participant.name}
      </h4>
      <p className="text-xs text-gray-600 mb-1">{participant.team}</p>
      <p className="text-xs text-gray-500 mb-2">{participant.level}</p>
      <StatusBadge status={participant.status} statusClass={participant.statusClass} />
    </div>
  );
}