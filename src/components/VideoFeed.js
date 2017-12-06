import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class VideoFeed extends Component {

  render() {
    console.log(this.props.videos);
    return (
        <div className="videoLinkContainer">
          <div className="videoContent">
            {this.props.videos.slice(0, 3).map(video =>
              <div className="youtubeVideo" key={video.id.videoId}>
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + video.id.videoId} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
              </div>
            )}

          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        videos: state.videos,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(VideoFeed);
