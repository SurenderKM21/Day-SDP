import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';

const UserTopbar = () => {
    return (
        <div className='h-[8vh] w-full flex justify-between items-center shadow-sm shadow-primary fixed top-0 left-0 z-20 px-4 bg-white'>
            <div className='text-lg font-bold'>
                User Dashboard
            </div>
            <div className='flex items-center gap-4'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>MM</AvatarFallback>
                </Avatar>
                <ModeToggle />
            </div>
        </div>
    );
};

export default UserTopbar;
