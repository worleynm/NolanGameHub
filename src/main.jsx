import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App as RPSGame } from './pages/rps/App.jsx'
import { App as WordleGame } from './pages/wordle/App.jsx'
import { App as TicTacToeGame } from './pages/tictactoe/App.jsx'
import { App as FroggerGame } from './pages/frogger/App.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { NavigationComponent as NavBar } from './components/Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename='/gamehub-Team13'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rps/" element={<RPSGame />} />
          <Route path="/wordle/" element={<WordleGame />} />
          <Route path="/rps/" element={<RPSGame />} />
          <Route path="/tictactoe/" element={<TicTacToeGame />} />
          <Route path="/frogger/" element={<FroggerGame />} />
          {/* <Route path="/wordle" element={<WordleGame />} /> */}
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)

