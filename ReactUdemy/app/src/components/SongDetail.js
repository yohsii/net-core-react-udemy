import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    return (
        <div>
            {(() => {
                if (props.song) return (
                    <div className="">
                        <h3 className="">Details for:</h3>
                        <p>
                            Title: {props.song.title}
                            <br />
                            Duration: {props.song.duration}
                        </p>
                    </div>
                );
                else return "select a song";
            })()}
        </div>    
    );
}

const mapStateToProps = (state) => {

    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);