import React from "react";
import styled from 'styled-components';

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #FF0000 0%, #930000 100%);
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  clip-path: polygon(0 0, 66% 0, 90% 100%, 0% 100%);

  h2{
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 1rem;
  }
`;

const StyledCharacter = styled.div`
    min-width: 35rem;
    min-height: 20rem;
    background-color: white;
    font-size: 1.2rem;
    margin: 1rem 0.5rem;
    padding: 0;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Roboto', sans-serif;
`;

const InfoList = styled.ul`
  display: flex;
  width: 85%;
  justify-content: space-around;
  li{
      text-align: center;
      width: 100%;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%;
  }
  li span{
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 200;
      font-size: 0.8rem;
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
                  Birth Year<span>{birth_year}</span>
              </li>

              <li>
                  Gender<span>{gender}</span>
              </li>

              <li>
                  Hair Color<span>{hair_color}</span>
              </li>
              
              <li>
                  Height<span>{height}</span>
              </li>
          </InfoList>
        </InfoContainer>
      </StyledCharacter>
  )
};

export default Character;
