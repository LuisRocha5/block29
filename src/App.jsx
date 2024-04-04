import AllPlayers from "./AllPlayers";
import SinglePlayerCard from "./SinglePlayerCard";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT';

function App() {
  const [playerList, setPlayerList] = useState([]);

  return (
    <>
      <h1>Puppy Bowl React</h1>
      <Routes>
        <Route
          path="/"
          element={<AllPlayers baseUrl={API_URL} playerList={playerList} setPlayerList={setPlayerList} />}
        />
        <Route
          path="/players/:playerId"
          element={<SinglePlayerCard baseUrl={API_URL} playerList={playerList} setPlayerList={setPlayerList} />}
        />
      </Routes>
    </>
  );
}

export default App;
