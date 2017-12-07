import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (

      <div className="categoriesContainer">      
        <div className="App-title"></div>

        <button className="portraits" id="contain" onClick={this.handleClickPortraits.bind(this)}>
          Portraits
        </button>

        <button className="lowlight" id="contain" onClick={this.handleClickLowlight.bind(this)}>
          Lowlight
        </button>

        <button className="landscapes" id="contain" onClick={this.handleClickLandscapes.bind(this)}>
          Landscapes
        </button>

        <button className="sharpness" id="contain" onClick={this.handleClickSharpness.bind(this)}>
          Sharpness
        </button>
      </div>

    )
  }

  handleClickPortraits(event) {
    //dispatch fetchVideos
    this.props.fetchVideos("portraits")
  }

  handleClickLowlight(event) {
    //dispatch fetchVideos
    this.props.fetchVideos("lowlight")
  }

  handleClickLandscapes(event) {
    //dispatch fetchVideos
    this.props.fetchVideos("landscapes")
  }

  handleClickSharpness(event) {
    //dispatch fetchVideos
    this.props.fetchVideos("sharpness")
  }
}

const mapActionsToProps = {fetchVideos}

export default connect(null, mapActionsToProps)(Welcome);
