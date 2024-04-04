import { useState } from "react";

const AddPlayer = ({ baseUrl, fetchAllPlayers }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          breed,
          imageUrl
        }),
      });
      const result = await response.json();
      console.log(result);
      if(result){
        alert('Player Added');
        fetchAllPlayers();
      }
      else{
        alert("Something went wrong");
      }
    } catch (err){
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Breed:{" "}
        <input
          type="text"
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
      </label>
      <label>
        ImageUrl:{" "}
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
      </label>
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayer;
