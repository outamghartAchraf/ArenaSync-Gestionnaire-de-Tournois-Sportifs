import { useState } from "react";

function RegistrationForm({tournamentId, onAddParticipant}) {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.match(/^[a-zA-Z\s]{2,}$/)) {
      newErrors.name = "Name must be at least 2 letters"
    }
     
    if(!team.trim()) {
      newErrors.team = "Team name is required"
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    if(!validateForm()) {
      return;
    }

    const newParticipant = {
      id: Date.now(),
      name: name,
      team: team,
      level: level,
      status: "Pending",
      avatar: `https://i.pravatar.cc/56?img=${Date.now() % 70}`
      
    }
     onAddParticipant(tournamentId, newParticipant);

     setName("");
     setTeam("");
     setLevel("Beginner");
     setErrors({});

  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white">
      <h3 className="text-xl font-bold mb-4">Register for Tournament</h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-2">Name </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
            errors.name ? "border-red-500 focus:ring-red-500" : "border-white/30 focus:ring-white/50"
            }`}
          />
            {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
        </div>
         
        <div>
          <label className="block font-semibold mb-2">Team </label>
          <input
            type="text"
            placeholder="Enter your team name"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
              errors.team ? "border-red-500 focus:ring-red-500" : "border-white/30 focus:ring-white/50"
            }`}
          />

           {errors.team && <p className="text-red-300 text-sm mt-1">{errors.team}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-2">Level</label>
          <select
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner" className="bg-blue-900">
              Beginner
            </option>
            <option value="Intermediate" className="bg-blue-900">
              Intermediate
            </option>
            <option value="Advanced" className="bg-blue-900">
              Advanced
            </option>
          </select>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-bold transition ${"bg-white/20 text-white hover:bg-white/30 cursor-pointer border border-white/30"}`}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
