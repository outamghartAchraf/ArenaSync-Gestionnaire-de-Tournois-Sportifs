import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { tournaments } from './data/tournamentDB';

function App() {
   

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