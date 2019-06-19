import React from "react";

const Character = props => {
  let { name, birthYear, gender, hairColor, height } = props.character;

  return (
      <div className="character">
          <h2>{name}</h2>
          <ul>
              <li>
                  Birth Year: <span>{birthYear}</span>
              </li>

              <li>
                  Gender: <span>{gender}</span>
              </li>

              <li>
                  Hair Color: <span>{hairColor}</span>
              </li>
              
              <li>
                  Height: <span>{height}</span>
              </li>
          </ul>
      </div>
  )
};

export default Character;
