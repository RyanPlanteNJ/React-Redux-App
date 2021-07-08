import React from 'react';
import './index.css';
import './App.css';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 

import RicknMorty from './components/RicknMorty';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const RickNMortyContainer = styled.div`
  max-width:1024px;
  margin: 0 auto;
`;

function App() {
  return (
    <RickNMortyContainer className="App">
        <RicknMorty />
    </RickNMortyContainer>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, rootElement);