import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './Components/Posts'
import Postform from './Components/Postform';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  } 
}

export default App;
