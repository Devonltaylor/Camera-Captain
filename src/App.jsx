import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log('this.state', this.state);
  }


  render() {
    return (
      <div className="App">
        <div>
          <button className="menuButton">MENU</button>
        </div>
        <div className="App-title"></div>
        <h2>Camera Captain</h2>

        <div className="categoriesContainer">
          <div className="contain">
            Portraits
          </div>

          <div className="contain">
            Lowlight
          </div>

          <div className="contain">
            Landscapes
          </div>

          <div className="contain">
            Sharpness
          </div>
        </div>

        <div className="videoLinkContainer">
          <div className="videoContent">
            <div id="youtubeVideo">
              Vid
            </div>
            <h3>Title</h3>
            <p>text will go in this area.....</p>
            <div id="youtubeVideo">
              Vid
            </div>
            <div id="youtubeVideo">
              Vid
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
