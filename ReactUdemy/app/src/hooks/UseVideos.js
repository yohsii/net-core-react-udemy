import React, { useState, useEffect } from 'react';
import youtube from '../api/Youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
        console.log("youtube res", response);
        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;