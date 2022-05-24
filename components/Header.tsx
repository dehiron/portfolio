import Link from 'next/link'
import React, { useState } from 'react';
import Drawer from './Drawer';
import {Link as Scroll} from "react-scroll";
import Image from "next/image";
import { useRouter } from 'next/router';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="bg-slate-200">
            <header className="flex items-center md:items-center justify-between top-0 p-3 md:p-2 max-w-7xl mx-auto h-[66px]">
                <div className="flex space-x-5">
                    <Link href="/">
                        <img
                            className="h-8 md:h-12 object-contain cursor-pointer"
                            src="/header_logo.png"
                            alt=""
                        />
                    </Link>
                </div>

                { router.pathname.includes("contact") ?
                    <></>
                    :
                    <div>
                        <div className="hidden md:inline-flex space-x-5 md:mt-5">
                            <Scroll to="About" smooth={true} duration={600} offset={24}><div className="cursor-pointer"><p className="text-lg font-josefin text-[#323232]">About</p></div></Scroll>
                            <Scroll to="Skills" smooth={true} duration={600} offset={24}><div className="cursor-pointer"><p className="text-lg font-josefin text-[#323232]">Skills</p></div></Scroll>
                            <Scroll to="Projects" smooth={true} duration={600} offset={24}><div className="cursor-pointer"><p className="text-lg font-josefin text-[#323232]">Projects</p></div></Scroll>
                            <Link href="/contact"><div className="cursor-pointer"><p className="text-lg font-josefin text-[#323232]">Contact</p></div></Link>
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
                    </div>

                }
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <Scroll to="About" smooth={true} duration={600} offset={24}><div className="cursor-pointer" onClick={() => {setIsOpen(false)}}><p className="text-lg font-josefin">About</p></div></Scroll>
                    <Scroll to="Skills" smooth={true} duration={600} offset={24}><div className="cursor-pointer" onClick={() => {setIsOpen(false)}}><p className="text-lg font-josefin">Skills</p></div></Scroll>
                    <Scroll to="Projects" smooth={true} duration={600} offset={24}><div className="cursor-pointer" onClick={() => {setIsOpen(false)}}><p className="text-lg font-josefin">Projects</p></div></Scroll>
                    <Link href="/contact"><div className="cursor-pointer" onClick={() => {setIsOpen(false)}}><p className="text-lg font-josefin">Contact</p></div></Link>
                </Drawer>
            </header>
        </div>
    )
}

export default Header