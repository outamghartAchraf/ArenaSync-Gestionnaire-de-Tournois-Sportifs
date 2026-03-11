import { useParams, useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import ParticipantsList from "../components/ParticipantsList";
import { useState } from "react";
import RegistrationButton from "../components/RegistrationButton";

export default function TournamentDetailsPage({toggleRegistration, tournaments}) {
  const [activeTab, setActiveTab] = useState("participants");
  const { id } = useParams();
  const navigate = useNavigate();

  const tournament = tournaments.find((t) => t.id === Number(id));
   const getIconClass = (icon) => {
    const iconMap = {
      badminton: "fas fa-trophy",
      basketball: "fas fa-basketball-ball",
      tennis: "fas fa-table-tennis",
    };
    return iconMap[icon] || "fas fa-trophy";
  };
  
  const currentUser = { id: 999,  avatar: `https://i.pravatar.cc/56`,name: "User(you)" , team: "Team A", level: "Beginner", status: "pending"}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pb-24">
  
      <div className="flex justify-between items-center px-5 py-2 text-white text-sm font-semibold"></div>

       
      <div className="flex items-center gap-4 px-5 py-3">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <h2 className="text-lg font-semibold text-white">Tournament</h2>
      </div>

     
      <div className="px-5">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 mb-5">
          <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center text-3xl flex-shrink-0">
            <i className={getIconClass(tournament.icon)}></i>
          </div>
          <div className="flex-1">
            <h2 className="text-white font-semibold mb-1">
              {tournament.title}
            </h2>
            <StatusBadge status={tournament.status} />
          </div>
          <button className="text-white hover:bg-white/20 p-2 rounded-full transition">
            <i className="fas fa-share-alt"></i>
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 space-y-3 mb-6 text-white text-sm">
          <div className="flex items-center gap-3">
            <i className="fas fa-users"></i>
            <span>
              {tournament.participants}/{tournament.maxParticipants}{" "}
              Participants • {tournament.type}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-trophy"></i>
            <span>{tournament.format}</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-calendar"></i>
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-map-marker-alt"></i>
            <span>{tournament.location}</span>
          </div>

        <div className="pt-3 border-t border-white/20">
            <RegistrationButton 
            
               
            />
          </div>
        </div>

        
        <div className="flex gap-2 bg-white/10 backdrop-blur-md rounded-xl p-1 mb-6">
          {["Info", "Participants", "Bracket"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.toLowerCase()
                  ? "bg-white text-purple-600"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "info" && (
          <div className="text-white">
            <p className="text-sm leading-relaxed">{tournament.description}</p>
          </div>
        )}

        {activeTab === "participants" && (
          <ParticipantsList participants={tournament.participants_list} />
        )}

        {activeTab === "bracket" && (
          <div className="text-white text-center py-8 bg-white/10 rounded-xl">
            <p className="text-sm text-white/60">
              Bracket will be displayed here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
