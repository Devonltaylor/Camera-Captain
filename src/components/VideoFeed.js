import React, { Component } from 'react';
import './App.css';

class VideoFeed extends Component {

  render() {
    return (
        <div className="videoLinkContainer">
          <div className="videoContent">
            <div id="youtubeVideo">
              Vid
            </div>
            <div id="videoDescription">
            <h3>Title</h3>
            <p>text will go in this area.....</p>
            </div>
            <div id="youtubeVideo">
              Vid
            </div>
            <div id="youtubeVideo">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/6eJcYYHyptg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    )
  }
}

export default VideoFeed;
