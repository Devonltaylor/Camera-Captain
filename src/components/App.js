import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome';
import VideoFeed from './VideoFeed';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <div>
          <button className="menuButton">MENU</button>
        </div>
        <div className="App-title"></div>
        <h2>Camera Captain</h2>

        <Welcome />
        <VideoFeed />

      </div>
    )
  }
}

export default App;
