import React from "react";

import Character from "./Character";
import './Characters.css';

const CharacterList = props => {
  return (
    <div className="character-container">
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </div>
  );
};

export default CharacterList;
