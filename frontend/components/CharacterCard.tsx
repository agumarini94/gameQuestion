import React from 'react';

const CharacterCard = ({ characterName, level }) => {
  return (
    <div>
      <p>Nivel {level}</p>
      <p>{characterName}</p>
      <img src={`https://placehold.co/100x100?text=${characterName}`} alt={characterName}/>
    </div>
  );
};

export default CharacterCard;
