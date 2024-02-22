import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './winning-combinations'
import Gameover from "./components/Gameover";

let INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const PLAYERS = { 'X': 'Player 1', 'O': 'Player 2' };

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, playerName) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol
    ) {
      winner = playerName[firstSymbol];
    }
  }

  return winner;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS);

  let activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard =  deriveGameBoard(gameTurns);
  let winner = deriveWinner(gameBoard, playerName);
  let isDraw = gameTurns.length == 9;

  function handlePlayerNameChange(symbol, newName) {
    setPlayerName(preNames => {
      return {
        ...preNames,
        [symbol]: newName
      };
    })
  };

  function handleSelectSquare(rowIndex, columnIndex,) {
    setGameTurns((prevTurns) => {
      let currentPlayer = (prevTurns.length > 0 && prevTurns[0].player === 'X') ? 'O' : 'X';
      return [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    })
  };

  function resetMatch() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeNames={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeNames={handlePlayerNameChange} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      {(winner || isDraw) && <Gameover winner={winner} restartMatch={resetMatch} />}
      <Log turns={gameTurns} playerName={playerName} />
    </main>
  )
}

export default App
