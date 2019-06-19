import React, { Component } from "react";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CharacterListView } from "./views";
import combinedReducers from './reducers';

import "./styles/App.css";

const store = createStore(
  combinedReducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CharacterListView />
      </Provider>
    );
  }
}

export default App;
