import React from 'react'
import {HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch} from 'react-icons/hi'
import {Menu} from '@headlessui/react'

export default function Header() {
  return <div  className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-400">
    <div className='relative'>
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
        <input 
        type="text" 
        placeholder="Search..." 
        className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"/>
    </div>
    
    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <span className="sr-only">Open user menu</span>
            <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center' 
            style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face'}}>
                <span className='sr-only'>Hugh Jackson</span>
            </div>
            
           
          </Menu.Button>
        </div>
    </Menu>
   
  </div>
  
}

