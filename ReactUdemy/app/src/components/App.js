import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDcmjGeV_xgnK4wfWQHTT3DwS4e4tcvrNc';

class App extends React.Component {
    state = {videos:[],selectedVideo:null};

    componentDidMount = () => {
        this.onTermSubmit("buildings");
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
        console.log("youtube res", response);
        this.setState({ videos: response.data.items, selectedVideo:response.data.items[0] });
    }

    onVideoSelect = (video) => {
        console.log("from video component", video);
        this.setState({ selectedVideo:video });
    }

    render() {
        return (

            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;