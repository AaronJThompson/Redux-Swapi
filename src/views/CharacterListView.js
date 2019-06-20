import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions'

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (
        <h2>Fetching data...</h2>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    characters: state.chars.characters,
    fetching: state.chars.fetching,
    error: state.chars.error,
  };
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
