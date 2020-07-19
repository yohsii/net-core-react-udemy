import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID LThnNvyzXthKPvEpbE-9m631LZqO8XlMZMPfn6StBwk' }
});