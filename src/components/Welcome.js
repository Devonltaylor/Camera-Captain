import React, { Component } from 'react';


class Welcome extends Component {

  render() {
    return (
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

    )
  }
}

export default Welcome;
