import React, { useEffect} from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/index';
import { Link } from 'react-router-dom';

const Actions = (props) => {

    return (
        <React.Fragment>
            <button onClick={(e) => { props.deleteStream(props.match.params.id); }} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>    
    );
}

const StreamDelete = (props) => {
    const { fetchStream } = props;
    useEffect(() => {
        fetchStream(props.match.params.id);
    }, [fetchStream]);

    return (
        <div>
            StreamDelete
            <Modal
                onDismiss={() => history.push('/')}
                title="Delete Stream"
                content={props.stream ? `Are you sure you want to delete this stream: ${props?.stream?.title}?` : 'Are you sure you want to delete this stream?'} actions={Actions(props)}
            />
        </div>
    );
}
const mapStateToProps = (state,ownProps) => {
    return {
        stream:state.streams[ownProps.match.params.id]
    };
}
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);