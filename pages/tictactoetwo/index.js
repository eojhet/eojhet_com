import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const stopMessage = [
  "Stop that.",
  "Stop doing that.",
  "There is no reason!",
  "Please",
  "Stahp",
  "You have no right.",
  "I'm over this!",
  "Click function revoked."
];

export default function Tictactoe () {
  const [xTurn, setXTurn] = useState(true);
  // const [gameOn, setGameOn] = useState(true);
  const [status, setStatus] = useState('You Go First');
  const [turnNum, setTurnNum] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  let gameOn = true;

  const handleAction = (e) => {
    if (xTurn && e.target.innerHTML === "") {
      e.target.innerHTML = "X";
      setXTurn(false);
      setStatus("Thinking...");
      setTurnNum(turnNum + 1);
      // if (turnNum > 8) {
      //   setGameOn(false);
      //   setStatus("CAT'S GAME, YOU LOSE");
      // }

      handleScore();
      setTimeout( () => {compTurn()}, 300);    
    }
  }

  const handleScore = () => {
    if (gameOn) {
      let result = [];
      let x = [];
      let o = [];

      for (let i = 0; i < 9; i++) {
        result.push(document.getElementById(i).innerHTML);
      }

      result.forEach((element, index) => {
        if(element === 'X') x.push(index)
      })

      for (let i = 0; i < winningLines.length; i++) {
        if (
          x.includes(winningLines[i][0]) 
          && x.includes(winningLines[i][1])
          && x.includes(winningLines[i][2])
          ){
            gameOn = false;
            setXTurn(false);
            setStatus('You Win!');
            break;
          }
      }
      
      result.forEach((element, index) => {
        if(element === 'O') o.push(index)
      })

      for (let i = 0; i < winningLines.length; i++) {
        if (
          o.includes(winningLines[i][0]) 
          && o.includes(winningLines[i][1])
          && o.includes(winningLines[i][2])
          ){
            gameOn = false;
            setXTurn(false);
            setStatus('You Lose!');
            break;
          }
      }
    }
  }

  const compTurn = () => {
    if (gameOn) {

      let result = [];
      let emptySquares = [];

      for (let i = 0; i < 9; i++) {
        result.push(document.getElementById(i).innerHTML);
      }

      result.forEach((element, index) => {
        if(element === '') emptySquares.push(index)
      })
      if (emptySquares.length !== 0) {
        const randMove = Math.floor(Math.random() * emptySquares.length);

        document.getElementById(emptySquares[randMove]).innerHTML = "O";
        setXTurn(true);
        setStatus("Your Turn");
        handleScore();
      } else {
        setStatus("Cat's Game");
      }
    } 
  }

  const handleNewGame = () => {
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).innerHTML = '';
    }
    gameOn = true;
    setXTurn(true);
    setTurnNum(0);
    setStatus("You Go First")
  }

  const handleStatusClick = (e) => {
    if (messageCount !== stopMessage.length) {
      let oldStatus = status;
      setStatus(stopMessage[messageCount]);
      setTimeout( () => {setStatus(oldStatus)}, 500);
      setMessageCount(messageCount + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.status} onClick={handleStatusClick}>{status}</div>
      <div className={styles.gridContainer}>
        <div id="0" onClick={handleAction} className={styles.gridItem}/>
        <div id="1" onClick={handleAction} className={styles.gridItem}/>
        <div id="2" onClick={handleAction} className={styles.gridItem}/>
        <div id="3" onClick={handleAction} className={styles.gridItem}/>
        <div id="4" onClick={handleAction} className={styles.gridItem}/>
        <div id="5" onClick={handleAction} className={styles.gridItem}/>
        <div id="6" onClick={handleAction} className={styles.gridItem}/>
        <div id="7" onClick={handleAction} className={styles.gridItem}/>
        <div id="8" onClick={handleAction} className={styles.gridItem}/>
      </div>
      <button onClick={handleNewGame} className={styles.newGame}>NEW GAME</button>
    </div>
  )
}

