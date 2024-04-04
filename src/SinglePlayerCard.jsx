import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePlayerCard = ({ baseUrl }) => {
  const [player, setPlayer] = useState({});
  const navigate= useNavigate();
  const { playerId } = useParams();

  const fetchSinglePlayer = async () => {
    try {
      const response = await fetch(`${baseUrl}/players/${playerId}`);
      const result = await response.json();
      console.log(result);
      setPlayer(result.data.player);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSinglePlayer();
  }, [playerId]);

  return (
    <>
      <h1>{player.name}</h1>
      <p>{player.breed}</p>
      <p>{player.status}</p>
      <p>{player.teamId}</p>
      <img src={player.imageUrl} alt={player.name} />
      <br />
      <button onClick={() => {
      navigate("/player");
    }}>Back</button>
    </>
  );
};

export default SinglePlayerCard;
