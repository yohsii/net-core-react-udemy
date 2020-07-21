import React from 'react';
import VideoItem from './VideoItem';
class VideoList extends React.Component {

    render() {

        var videos = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />;
        });

        return (
            <div className="ui divided relaxed list">
                {this.props.videos.length}
                {videos}
            </div>
            
        );
    }
}

export default VideoList;