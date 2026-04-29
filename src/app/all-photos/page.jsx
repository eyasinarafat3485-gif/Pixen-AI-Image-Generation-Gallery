import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async() => {
    const res= await fetch(`${process.env.BETTER_AUTH_URL}/data.json`)
    const photos= await res.json();
    console.log(photos);
    return (
        <div className='w-[95%] md:w-[85%] mx-auto my-10'>
            <h1 className='text-2xl font-bold text-center'>All Photos</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    photos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;