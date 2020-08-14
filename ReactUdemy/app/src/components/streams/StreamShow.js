import React, { useEffect,useRef} from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';

const StreamShow = (props) => {
    const vidRef = useRef();
    const { fetchStream } = props;
    let player = null;
    const {stream} = props;
    useEffect(() => {
        fetchStream(props.match.params.id);
    }, [fetchStream]);

    useEffect(() => {
        if (stream) {
            player = flv.createPlayer({
                type: 'flv',
                url: `http://localhost:8000/live/${props.match.params.id}.flv`
            });
            player.attachMediaElement(vidRef.current);
            player.load();
            return () => {
                player.destroy();
            }
        }
    },[stream]);

    return (
        <div>
            <video ref={vidRef} style={{ width: '100%' }} controls></video>
            <h1>{props?.stream?.title}</h1>
            <h5>{props?.stream?.description}</h5>
        </div>
    );
}

const mapStateToProps = (state,ownProps) => {

    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);