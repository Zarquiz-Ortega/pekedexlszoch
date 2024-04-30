import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './page/HomePage'
import Pokedex from './page/Pokedex'
import PokeInfo from './page/PokeInfo'
import ProtectedRoutes from './page/ProtectedRoutes'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokeInfo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
