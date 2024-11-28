import { Separator } from '@radix-ui/react-separator';
import { ArrowBigLeft, ArrowLeft, ArrowRight, ArrowUp, Bell, Heart, Home, MessageSquare, Search, Settings, Star, User } from 'lucide-react';
import React from 'react'
const items = [
    { name: 'Home', link: '/', icon: <Home /> },
    { name: 'Search', link: '/search', icon: <Search /> },
    { name: 'Profile', link: '/profile', icon: <User /> },
    { name: 'Settings', link: '/settings', icon: <Settings /> },
    { name: 'Notifications', link: '/notifications', icon: <Bell /> },
    { name: 'Messages', link: '/messages', icon: <MessageSquare /> },
    { name: 'Favorites', link: '/favorites', icon: <Star /> },
    { name: 'Likes', link: '/likes', icon: <Heart /> },
];
function MenuLinks() {
    return (
        <div className='px-8'>
            <div className='bg-accent shadow-md rounded-md py-2'>
                {items.map((item, index) => (
                    <div key={index} className='flex items-center justify-between  py-2 px-4'>
                        <div className='flex gap-5 text-xs'>
                            <div>{item.icon}</div>
                            <div><p>{item.name}</p></div>
                        </div>

                        <div className='primary'>
                            <ArrowRight size={"20px"} className='text-primary text-xs' />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuLinks