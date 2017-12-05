import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class SignIn extends Component {
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


<div className="Welcome">
  <div className="App-title">Camera Captin</div>

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

    <div>Profile</div>
    <div>My Sets</div>
    <div>My Gear</div>
</div>

)
}
}

export default Welcome;
