import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import carImg from '../assets/car.png'
import frogImg from '../assets/frog.png'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const GameScreen = ({setSeed}) => {
  let gameOver = false;
  let score = 0;

  const GenerateRandomLane = () => {
    const laneType = Math.round(Math.random() * 6) - 3;
    const carDirection = laneType < 0 ? -1 : 1;
    const laneClass = `${laneType === 0 ? "grass" : "road"}${carDirection === -1 ? " neg" : ""}`;
    const duration = [5, 3, 2][Math.abs(laneType) - 1] + (Math.random() - 0.5);
  
    let returnVal = (<div className={`lane ${laneClass}`}>
                      {laneType !== 0 ? (
                        <motion.img
                          src={carImg}
                          className='car'
                          style={{ rotateY: carDirection === -1 ? 0 : 180 }}
                          animate={{ x: carDirection * 650 }}
                          transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
                        />
                      ): <></>}
                  </div>);
    
    return returnVal;
  };

  const moveScreenUp = () => {
    if (!gameOver) {
      const gameScreen = document.getElementById('lanesDiv');
      const children = gameScreen.children;

      score++;

      // Delete Last Child of div.gamescreen
      gameScreen.removeChild(children[children.length - 1]);
  
      // Create a new div element
      const newLane = document.createElement('span');
      gameScreen.insertBefore(newLane, children[0]);
  
      // Create a root and render GenerateRandomLane component into the new div element
      const root = ReactDOM.createRoot(newLane);
      root.render(<GenerateRandomLane />);
    }
  };
  
  
  const moveFrogRight = () => {
    let frog = document.getElementById('frog');
    let frogBoundingBox = frog.getBoundingClientRect();
    let gameScreenBox = document.getElementById('lanesDiv').getBoundingClientRect();
    let distanceToMove = (frogBoundingBox.left - gameScreenBox.left) + frogBoundingBox.width
    let maxDistance = gameScreenBox.width - frogBoundingBox.width

    if(distanceToMove < maxDistance){
      frog.style.left = `${distanceToMove}px`;
    }
  }

  const moveFrogLeft = () => {
    let frog = document.getElementById('frog');
    let frogBoundingBox = frog.getBoundingClientRect();
    let gameScreenBox = document.getElementById('lanesDiv').getBoundingClientRect();
    let distanceToMove = (frogBoundingBox.left - gameScreenBox.left) - frogBoundingBox.width
    let maxDistance = 0

    if(distanceToMove > maxDistance){
      frog.style.left = `${distanceToMove}px`;
    }
  }

  const frogCarCollisionCheck = () => {
    const frogBox = document.getElementById('frog').getBoundingClientRect();
    const cars = document.getElementsByClassName('car');

    for (let car of cars) {
      const carBox = car.getBoundingClientRect();
      if (
        frogBox.x < carBox.x + carBox.width &&
        frogBox.x + frogBox.width > carBox.x &&
        frogBox.y < carBox.y + carBox.height &&
        frogBox.y + frogBox.height > carBox.y
      ) {
        return true;
      }
    }

    return false;
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if(!gameOver){
        let keyPressed = e.key.toLowerCase()
        switch(keyPressed){
          case 'arrowup':
          case 'w':
            moveScreenUp();
            break;

          case 'arrowright':
          case 'd':
            moveFrogRight();
            break;

          case 'arrowleft':
          case 'a':
            moveFrogLeft()
            break;
        }
      }
    });

    let checkInterval = setInterval(() => {
      if(frogCarCollisionCheck()){
        gameOver = true;
        alert(`You Lost :(\nYour score is ${score} lines`)
        location.reload();
        clearInterval(this.checkInterval);
      }
    }, 100)

    return () => {
      clearInterval(checkInterval);
    };
  }, [gameOver]);

  return (
    <>
      <div id="gamescreen">
        <div id='frogDiv' >
          <div className="lane"></div>
          <div className="lane"></div>
          <div className="lane"></div>
          <div className="lane"></div>
          <div className="lane"></div>
          <div className="lane"></div>
          <div className="lane"><img src={frogImg} id='frog'/></div>
        </div>
        <div id="lanesDiv">
          <GenerateRandomLane />
          <GenerateRandomLane />
          <GenerateRandomLane />
          <GenerateRandomLane />
          <GenerateRandomLane />
          <GenerateRandomLane />
          <div className="lane grass" id=''></div>
        </div>
      </div>
    </>
  );
};

export default GameScreen;
