import { useState } from "react";

function RegistrationForm() {
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

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white">
      <h3 className="text-xl font-bold mb-4">Register for Tournament</h3>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Name *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Team *</label>
          <input
            type="text"
            placeholder="Enter your team name"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
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
