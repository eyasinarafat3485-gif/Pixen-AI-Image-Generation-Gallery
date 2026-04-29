import Image from 'next/image';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotoDetailsPage = async({params}) => {
    const {id}= await params;

    const res= await fetch(`${process.env.BETTER_AUTH_URL}/data.json`)
    const photos= await res.json();
    
    const photo= photos.find(p=> p.id == id)
    console.log(photo);
    return (
        <div className='my-10 w-[95%] md:w-[85%] mx-auto text-center border border-gray-200 rounded-xl'>

            <div className=' h-[83vh] space-y-3'>
            <Image src={photo.imageUrl} width={500} height={500} alt='photo.title' className='mt-5 mx-auto rounded-xl' />
            <h1 className='font-bold text-lg'>{photo.title}</h1>
            <p>{photo.prompt}</p>
            <div className='flex justify-around'>
                            <div className='flex gap-2 items-center pl-15 mb-3'>
                                <FaHeart className='text-orange-600 cursor-pointer' />
                                <p>{photo.likes}</p>
                            </div>
                            <div className='flex gap-2 items-center pr-15 mb-3'>
                                <FaDownload className='text-orange-600 cursor-pointer' />
                                <p>{photo.downloads}</p>
                            </div>
                        </div>
            </div>
            
        </div>
    );
};

export default PhotoDetailsPage;