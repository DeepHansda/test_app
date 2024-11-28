"use client"

import { Bell, Sidebar } from 'lucide-react'
import { useSidebar } from './ui/sidebar'
// import { AiOutlineBars } from 'react-icons/ai'
// import { LuBellRing } from 'react-icons/lu'


function Navbar() {
    const { toggleSidebar } = useSidebar()
    return (
        <div className='flex items-center justify-between w-screen p-4 text-lg text-primary bg-accent '>
            <div className='flex items-center gap-x-3'>
                <div ><Sidebar onClick={() => toggleSidebar()} /></div>
                <div>My App</div>
            </div>
            <div>
                <div ><Bell /></div>
            </div>
        </div>
    )
}

export default Navbar