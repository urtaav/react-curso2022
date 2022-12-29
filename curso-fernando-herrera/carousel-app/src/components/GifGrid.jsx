import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifItem } from './GifItem';
import {LoadingSpinner} from './LoadingSpinner';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<LoadingSpinner />)
            }

            <div className='card-grid'>

                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}
