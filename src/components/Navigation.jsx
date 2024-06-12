import React from 'react'
import { Link } from "react-router-dom"

export function NavigationComponent(){
    return (
        // <ul className='navBar'>
        //     <li><Link to='/'>Home Page</Link></li>
        //     <li><Link to='/rps/'>Rock Paper Scissors</Link></li>
        //     <li><Link to='/tictactoe/'>Tic Tac Toe</Link></li>
        //     <li><Link to='/frogger/'>Frogger</Link></li>
        //     <li><Link to='/wordle/'>Wordle</Link></li>
        // </ul>
        <nav className="navbar">
        
        <ul className="navbar-nav">
          <ul className="nav-item">
            <Link to="/" className="nav-link">Home</Link> {/* React Router Link */}
          </ul>
          <ul className="nav-item">
            <Link to="/rps/" className="nav-link">Rock Paper Scissors</Link> {/* React Router Link */}
          </ul>
          <ul className="nav-item">
            <Link to="/frogger/" className="nav-link">Frogger</Link> {/* React Router Link */}
          </ul>
          <ul className="nav-item">
            <Link to="/tictactoe/" className="nav-link">Tic Tac Toe</Link> {/* React Router Link */}
          </ul>
          <ul className="nav-item">
            <Link to="/wordle/" className="nav-link">Wordle</Link> {/* React Router Link */}
          </ul>
        </ul>
      </nav>
    )
}