import React, { useState } from 'react';
// import { io, Socket } from 'socket.io-client';
import './App.css';
import SinglePlayer from './components/SinglePlayer';
import EnterMultiplayer from './components/EnterMultiplayer';

// const HEROKU_BACKEND = 'https://lit-citadel-75107.herokuapp.com/';
// const LOCAL_BACKEND = 'http://localhost:8080';

// const socket = io(LOCAL_BACKEND) as Socket<
//   ServerToClientEvents,
//   ClientToServerEvents
// >;

const getBoard = (
  gameMode: string,
  setGameMode: React.Dispatch<React.SetStateAction<string>>
) => {
  switch (gameMode) {
    case 'single':
      return <SinglePlayer setGameMode={setGameMode} />;
    case 'multi':
      return <EnterMultiplayer setGameMode={setGameMode} />;
    case 'ai':
      alert('Not yet implemented');
      return <SinglePlayer setGameMode={setGameMode} />;
  }
};

function App() {
  const [gameMode, setGameMode] = useState('single');

  return (
    <div className="page">
      <h1 className="tic-tac-toe-title">Tic Tac Toe</h1>
      <div className="tic-tac-toe-game">{getBoard(gameMode, setGameMode)}</div>
    </div>
  );
}

export default App;
