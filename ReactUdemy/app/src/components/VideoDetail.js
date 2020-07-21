import React from 'react';

class VideoDetail extends React.Component {
    
    render() {
        if (!this.props.video) {
            return (<div>loading</div>);
        }
        const embedURL = `https://youtube.com/embed/${this.props.video.id.videoId}`
        return (
            <div className="video-detail">
                <div className="ui embed">
                    <iframe src={embedURL}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>    
        );
    }
}

export default VideoDetail;