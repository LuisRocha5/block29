import React from "react";
import { Link } from "react-router-dom";

const PlayerList = ({ playerList, baseUrl, fetchAllPlayers }) => {
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/players/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Player deleted successfully");
        await fetchAllPlayers();
      } else {
        console.log("Failed to delete player");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(`hello`);

  return (
    <>
      <h3>Player List</h3>
      {playerList && playerList.map((players) => (
        <div key={players.id}>
          <Link to={`/players/${players.id}`}>
            <p>{players.name}</p>
          </Link>
          <button onClick={() => deleteHandler(players.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default PlayerList;
