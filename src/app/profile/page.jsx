'use client'
import { UpdateUserInfo } from '@/components/UpdateUserInfo';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);


    return (
        <div className='my-10 w-[95%] md:w-[85%] mx-auto'>
            <Card className='mx-auto max-w-96 flex flex-col items-center bg-orange-100'>
                <Avatar className='h-25 w-25'>
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p>{user?.email}</p>
                <UpdateUserInfo />
            </Card>
        </div>
    );
};

export default ProfilePage;