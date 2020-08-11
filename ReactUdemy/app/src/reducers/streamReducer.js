import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from '../actions/types';

export default (state = {},action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        case FETCH_STREAMS:
            const newState2 = { ...state };
            action.payload.forEach((x) => { newState2[x.id] = x; });
            return newState2;
        default: return state;
    }
}