import axios from 'axios';

const KEY = 'AIzaSyDcmjGeV_xgnK4wfWQHTT3DwS4e4tcvrNc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
    , params: { part: 'snippet', maxResults: 5, type: 'video', key: KEY}
});