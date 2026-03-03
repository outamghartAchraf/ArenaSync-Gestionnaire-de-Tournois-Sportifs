import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { tournaments } from './data/tournamentDB';
import { useEffect, useState } from "react";
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />; 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage tournaments = {tournaments} />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App