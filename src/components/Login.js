import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { showHub } from '../actions';

class Login extends Component {

  render() {
    return (
        <div className="LoginContainer">
          <button className="loginButton">login</button>

          <button className="loginButton" onClick={this.props.showHub.bind(this)}>Show HUB</button>
        </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        showHub: state.showHub

    }
}

const mapActionsToProps= {showHub}

export default connect(mapStateToProps, mapActionsToProps)(Login);

// export default Login;
