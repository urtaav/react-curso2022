import { useState, useEffect } from 'react';

import { get_gifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const get_images = async () => {
        const imgs = await get_gifs(category);
        setImages(imgs);
        setIsLoading(false);

    };

    useEffect(() => {
        get_images();
    }, [])

    return {
        images,
        isLoading
    }
}
