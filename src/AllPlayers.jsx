import { useState, useEffect } from "react";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";
import SinglePlayerCard from "./SinglePlayerCard";

const AllPlayers = ({ baseUrl }) => {
  const [playersList, setPlayerList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${baseUrl}/players`);
      const result = await response.json();
      console.log(result.data);
      setPlayerList(result.data.players);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <>
      <h2>Players:</h2>
      <AddPlayer baseUrl={baseUrl} fetchAllPlayers={fetchAllPlayers} />
      <PlayerList
        baseUrl={baseUrl}
        playerList={playersList}
        fetchAllPlayers={fetchAllPlayers}
        onPlayerClick={handlePlayerClick}
      />
      {selectedPlayer && (
        <SinglePlayerCard baseUrl={baseUrl} player={selectedPlayer} />
      )}
    </>
  );
};

export default AllPlayers;
