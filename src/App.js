import React, { Component } from "react";
import { CharacterListView } from "./views";
import styled from 'styled-components';
import Pagination from './components/Pagination';
import "./styles/App.css";
import './styles/reset.css';

const Title = styled.h1`
  display: block;
  font-size: 4rem;
  color: black;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Title>Starwars Characters</Title>
        <Pagination />
        <CharacterListView />
      </div>
    );
  }
}

export default App;
