import React from 'react'

import bmcLogo from "../assets/bmc-logo.svg"

export const Navbar = () => {
    return (
        <header className='h-16 flex justify-between py-4 px-12 rounded-b-md drop-shadow-md shadow-md text-2xl' style={{backgroundColor: '#197278'}}>
            <p className='font-yellowtail text-white'>🇫🇷 Practice French</p>
            <a href="https://www.buymeacoffee.com/SailTrain" className='rounded-md ring-2 ring-[#ffdd00] h-8 w-8 flex justify-center items-center'>
                <img className='h-6 w-6' src={bmcLogo} alt="Buy Me a Coffee"></img>
            </a>
        </header>
    )
}