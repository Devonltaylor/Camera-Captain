import React, { Component } from 'react';


class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="categoriesContainer">
        <button className="portraits" id="contain" onClick={this.handleClick.bind(this)}>
          Portraits
        </button>

        <button className="lowlight" id="contain" onClick={this.handleClick.bind(this)}>
          Lowlight
        </button>

        <button className="landscapes" id="contain" onClick={this.handleClick.bind(this)}>
          Landscapes
        </button>

        <button className="sharpness" id="contain" onClick={this.handleClick.bind(this)}>
          Sharpness
        </button>
      </div>

    )
  }
  handleClick(event) {
    //dispatch fetchVideos
    //this.props.fetchVideos(event.target.name)
  }
}

export default Welcome;
