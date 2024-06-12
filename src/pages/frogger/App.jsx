import { useState } from 'react'
import './App.css'
import Game from './screens/GameScreen'

export function App() {

  return (
    <>
      <div>
        <h1>Frogger</h1>
        <Game />
      </div>
    </>
  )
}
