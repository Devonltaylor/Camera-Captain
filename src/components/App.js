import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome';
import VideoFeed from './VideoFeed';
import { connect } from 'react-redux';

import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h3>Camera Captain</h3>

        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for Category"
            />
            <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>


        <div className="App-title"></div>


        {
          this.props.showWelcome ?
          <Welcome /> :
          <VideoFeed />
        }


      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      showWelcome: state.showWelcome
    }
}

export default connect(mapStateToProps)(App);
