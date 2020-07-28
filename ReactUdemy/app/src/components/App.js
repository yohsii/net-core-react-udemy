import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/UseVideos';

const KEY = 'AIzaSyDcmjGeV_xgnK4wfWQHTT3DwS4e4tcvrNc';

const App = (props) => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    const onVideoSelect = (video) => {
        console.log("from video component", video);
        setSelectedVideo(video);
    }

    return (

        <div className="ui container">
            <SearchBar onTermSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
            
    );
    
}

export default App;