import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { tournaments as DataTournaments } from './data/tournamentDB';
import { useEffect, useState } from "react";
import Loader from './components/Loader';
import TournamentDetailsPage from './pages/TournamentDetailsPage';
import NavBar from './components/NavBar';
 


function App() {
  const [loading, setLoading] = useState(true);
  const [tournaments, setTournaments] = useState([])

useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setTournaments(DataTournaments)
    }, 1000);
  }, []);

  if (loading) return <Loader />; 
  
  const toggleRegistration = (tournamentsId, user) => {

    setTournaments(tournaments => tournaments.map(t => {
      if(t.id === tournamentsId) {
        const isRegsiter = t.participants.find((p) => p.id === user.id);
        if(isRegsiter){
          return {
            ...t,
            participants: t.participants.filter((p) => p.id !== user.id)
          }
        }else{
          return {
            ...t,
            participants: [...t.participants, user]
          }

      }
    }))
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage tournaments = {tournaments} />} />
         <Route path="/tournament/:id" element={<TournamentDetailsPage tournaments = {tournaments}  />} />
      </Routes>
          <NavBar />
    </BrowserRouter>

    </>
  )
}

export default App