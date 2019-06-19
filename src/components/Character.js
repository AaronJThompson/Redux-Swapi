import React from "react";
import styled from 'styled-components';

const InfoContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #FF0000 0%, #930000 100%);
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  clip-path: polygon(0 0, 66% 0, 90% 100%, 0% 100%);

  h2{
      font-weight: 500;
      margin-bottom: 1rem;
  }
`;

const StyledCharacter = styled.div`
    min-width: 20rem;
    background-color: #ff8a3d;
    border-radius: .8rem;
    font-size: 1.2rem;
    margin: 1rem 0.5rem;
    padding: 1rem;
    color: white;
`;

const InfoList = styled.ul`
  li{
      text-align: left;
  }
  li span{
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 200;
  }
`
const Character = props => {
  let { name, birth_year, gender, hair_color, height } = props.character;

  return (
      <StyledCharacter>
        <InfoContainer>
          <h2>{name}</h2>
          <InfoList>
              <li>
                  Birth Year: <span>{birth_year}</span>
              </li>

              <li>
                  Gender: <span>{gender}</span>
              </li>

              <li>
                  Hair Color: <span>{hair_color}</span>
              </li>
              
              <li>
                  Height: <span>{height}</span>
              </li>
          </InfoList>
        </InfoContainer>
      </StyledCharacter>
  )
};

export default Character;
