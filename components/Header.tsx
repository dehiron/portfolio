import Link from 'next/link'
import React, { useState } from 'react';
import Drawer from './Drawer';
// import {Link as Scroll} from "react-scroll";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between top-0 p-3 md:p-5 max-w-7xl mx-auto bg-white">
            <div className="flex space-x-5 items-center">
                <Link href="/">
                    <img
                        className="h-8 md:h-12 object-cover cursor-pointer"
                        src="/header_logo.png"
                        alt=""
                    />
                </Link>
            </div>

            <div className="hidden md:inline-flex items-center space-x-5 mx-8">
                <div className="cursor-pointer"><h3>About</h3></div>
                <div className="cursor-pointer"><h3>Works</h3></div>
                <div className="cursor-pointer"><h3>Contact</h3></div>
            </div>

            <button 
                className=' inline-flex p-2 hover:bg-black rounded md:hidden hover:text-white'
                onClick={() => {setIsOpen(true)}}

            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="cursor-pointer"><h3>About</h3></div>
                <div className="cursor-pointer"><h3>My Works</h3></div>
                <div className="cursor-pointer"><h3>お問い合わせ</h3></div>
            </Drawer>
        </header>
    )
}

export default Header