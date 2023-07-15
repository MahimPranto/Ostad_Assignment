import React, { useState } from 'react';

const Content = () => {
  const [playerNames, setPlayerNames] = useState([]);

  const addPlayerName = (event) => {
    event.preventDefault();
    const playerName = event.target.elements.playerName.value;
    if (playerNames.length < 15) {
      if (playerName.trim() !== '') {
        setPlayerNames((prevPlayerNames) => [...prevPlayerNames, playerName]);
      } else {
        alert('No player is added');
      }
      event.target.reset();
    } else {
      alert("You can't add more than 15 players in your squad");
    }
  };

  const deletePlayerName = (index) => {
    setPlayerNames((prevPlayerNames) =>
      prevPlayerNames.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <form onSubmit={addPlayerName}>
        <input placeholder="Player name" name="playerName" autoComplete="off" />
        <button type="submit">Add</button>
      </form>
      <ol className="player-list">
        {playerNames.map((playerName, index) => (
          <li className="player-item" key={index}>
            <textarea className="player-name-textarea" value={playerName} readOnly />
            <button className="dltbtn" onClick={() => deletePlayerName(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;
