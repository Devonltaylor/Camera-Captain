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

        <FormGroup>
          <InputGroup>
            <FormControl
              type="text" placeholder="Search for..." value={this.state.query} onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <div className="homePage">
          <div className="locationContainer">
            map will go here
          </div>
        </div>

        <div>My Sets</div>
        <div>My Gear</div>
      </div>
    )
  }
}

export default App;
