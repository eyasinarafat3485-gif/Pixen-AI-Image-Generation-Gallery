import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async() => {
    const res= await fetch('http://localhost:3000/data.json')
    const photos= await res.json();
    // console.log(photos);
    const topPhotos= photos.slice(0, 8)
    // console.log(topPhotos);

    return (
        <div className='w-[95%] md:w-[85%] mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Top Generation</h1>
            <div className='grid grid-cols-4 mt-5 gap-5'>
                {
                    topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;