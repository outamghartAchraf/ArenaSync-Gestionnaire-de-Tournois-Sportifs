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
  
  const toggleRegistration = (tournamentId, user) => {
    setTournaments(tournaments.map(t => {
      if (t.id === tournamentId) {
        const isRegistered = t.participants_list.find(p => p.id === user.id)
        
        if (isRegistered) {
          return {
            ...t,
            participants_list: t.participants_list.filter(p => p.id !== user.id)
          }
        } else {
          return {
            ...t,
            participants_list: [...t.participants_list, user]
          }
        }
      }
      return t
    }))
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage tournaments = {tournaments} />} />
         <Route path="/tournament/:id"
          element = {<TournamentDetailsPage
           tournaments = {tournaments}
           toggleRegistration={toggleRegistration}
           />} />
      </Routes>
          <NavBar />
    </BrowserRouter>

    </>
  )
}

export default App