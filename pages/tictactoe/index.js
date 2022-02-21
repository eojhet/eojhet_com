import { useState } from "react";
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
]

export default function Tictactoe () {
  const [xTurn, setXTurn] = useState(true);
  const [gameOn, setGameOn] = useState(true);

  const handleAction = (e) => {
    if (gameOn && e.target.innerHTML === "") {
      xTurn ? e.target.innerHTML = "X" : e.target.innerHTML = "O";
      setXTurn(!xTurn);
      handleSurvey();
    }
  }

  const toggleTurn = () => {
    setXTurn(!xTurn);
  }

  const handleSurvey = () => {
    let result = [];
    let x = [];
    let o = [];
    let winner

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
          console.log(i);
          winner='X winner';
          setGameOn(false);
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
          console.log(i);
          winner='O winner';
          setGameOn(false);
          break;
        }
    }
    document.getElementById("info").innerHTML = gameOn ? xTurn ? "O's Move" : "X's Move" : winner;
  }

  const handleNewGame = () => {
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).innerHTML = '';
      setGameOn(true);

    }
  }

  return (
    <div className={styles.container}>
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
      <div onClick={toggleTurn}>{xTurn ? "True" : "False"}</div>
      <button onClick={handleNewGame}>NEW GAME</button>
      <div id="info">X goes first</div>
    </div>
  )
}

