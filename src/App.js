import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainUserInterface from './components/MainUserInterface';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainUserInterface} />
      </div>
    );
  }
}

export default App;
