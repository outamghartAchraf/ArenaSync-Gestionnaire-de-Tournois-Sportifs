import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function TournamentCard({ tournament }) {
  const getIconClass = (icon) => {
    const iconMap = {
      badminton: "fas fa-trophy",
      basketball: "fas fa-basketball-ball",
      tennis: "fas fa-table-tennis",
    };

    return iconMap[icon] || "fas fa-trophy";
  };

  const availableSpots = tournament.maxParticipants - tournament.participants_list.length;
  return (
    <div className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer">
      <Link
        to={`/tournament/${tournament.id}`}
        className="underline"
        style={{ textDecoration: "none" }}
      >
        <div className="flex gap-3 mb-3">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 ${
              tournament.sport === "basketball"
                ? "bg-orange-100 text-orange-500"
                : "bg-purple-100 text-purple-600"
            }`}
          >
            <i className={getIconClass(tournament.icon)}></i>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900">
              {tournament.title}
            </h3>
            <StatusBadge
              status={tournament.status}
              statusClass={tournament.statusClass}
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {tournament.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <i className="fas fa-users w-4 text-purple-600"></i>
            <span>
              {tournament.participants}/{tournament.maxParticipants}{" "}
              Participants • {tournament.type}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <i className="fas fa-trophy w-4 text-purple-600"></i>
            <span>{tournament.format}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <i className="fas fa-calendar w-4 text-purple-600"></i>
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <i className="fas fa-map-marker-alt w-4 text-purple-600"></i>
            <span>{tournament.location}</span>
          </div>
        </div>

         {availableSpots > 0 ? (
          <div className="mt-3 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs font-semibold text-green-700">
              ✓ {availableSpots} spots available
            </p>
          </div>
        ) : (
          <div className="mt-3 px-3 py-2 bg-red-50 rounded-lg border border-red-200">
            <p className="text-xs font-semibold text-red-700">
              ✗ Tournament Full
            </p>
          </div>
        )}
      </Link>
    </div>
  );
}
