import React from 'react'
import Hero from './Hero'

const Footer = () => {
    return (
        <>
            <footer className='flex flex-row justify-between items-center gap-6 bg-white h-18'>
                <div className='mt-5'>
                 <Hero/>
                 </div>
                 <div className='flex flex-col'>
                <p className='text-center'>Follow us:</p>
                <div>
                <a href="#">Facebook</a> |
                <a href="#">Twitter</a> |
                <a href="#">Instagram</a>
                </div>
                </div>
                <p className='mr-6'>&copy; 2025 My Website</p>
            </footer>
        </>
    )
}

export default Footer