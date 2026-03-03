import ParticipantItem from './ParticipantItem';

export default function ParticipantsList({ participants }) {
  return (
    <div className="text-white">
      <h3 className="text-white font-semibold mb-4">Participants List ({participants.length})</h3>
      <div className="grid grid-cols-2 gap-3">
        {participants.map(participant => (
          <ParticipantItem key={participant.id} participant={participant} />
        ))}
      </div>
    </div>
  );
}