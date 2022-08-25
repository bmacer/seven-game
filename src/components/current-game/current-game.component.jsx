const CurrentGame = ({ game }) => {
  return (
    <div>
      <h2>Current Game:</h2>
      {game.players.map((player) => {
        return <p>{player.playerName}</p>;
      })}
    </div>
  );
};

export default CurrentGame;
