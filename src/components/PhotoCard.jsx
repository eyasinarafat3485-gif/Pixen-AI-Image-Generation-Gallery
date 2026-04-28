import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';


const PhotoCard = ({ photo }) => {
   
    return (
        <Card className='border space-y-3 rounded-xl object-cover'>
            <Chip className='absolute right-3 size-sm'>{photo.category}</Chip>
            <div className='relative w-full aspect-square'>

                <Image src={photo.imageUrl} fill alt='photo.title' className='object-cover rounded-xl' />
                {/* <img src={photo.imageUrl} alt="photo.title" /> */}



            </div>
            <div>
                <h2 className='font-bold text-lg'>{photo.title}</h2>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <FaHeart className='text-orange-600 cursor-pointer' />
                    <p>{photo.likes}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaDownload className='text-orange-600 cursor-pointer' />
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Link href={`/all-photos/${photo.id}`} >
                <Button variant="outline" className='w-full'>View</Button>
            </Link>

        </Card>
    );
};

export default PhotoCard;