import React from 'react'

const Footer = () => {
  return (
    <div className='w-auto bg-zinc-800 p-2'>
        <div className='flex flex-wrap justify-around px-4 py-8'>
        <div>
            <h1 className='text-4xl font-bold'>Logo</h1>
            <h1 className='text-xl py-4 text-zinc-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        </div>
        <div className='flex flex-wrap px-12 text-zinc-400'>
            <div className='px-6'>
                <h2 className='py-2'>Product</h2>
                <h3 className='py-1'>For Buyers</h3>
                <h3 className='py-1'>For Founders</h3>
            </div>
            <div className='px-6'>
                <h2 className='py-2'>Resources</h2>
                <h3 className='py-1'>Blogs</h3>
                <h3 className='py-1'>FAQ</h3>
            </div>
            <div className='px-6'>
                <h2 className='py-2'>Legal</h2>
                <h3 className='py-1'>Buyer Terms</h3>
                <h3 className='py-1'>Seller Terms</h3>
                <h3 className='py-1'>Privacy Policy</h3>
            </div>
            <div className='px-6'>
                <h2 className='py-2'>Company</h2>
                <h3 className='py-1'>About Us</h3>
                <h3 className='py-1'>Contact Us</h3>
            </div>
            <div className='px-6'>
                <h2 className='py-2'>Social</h2>
                <h3 className='py-1'>Linkedin</h3>
                <h3 className='py-1'>X</h3>
                <h3 className='py-1'>Instagram</h3>
            </div>
        </div>
        
        </div>
        
        <div className='flex justify-center items-center text-zinc-400'>
        <h1>Done Deals &#169; {new Date().getFullYear()} All Rights Reserved</h1>
        </div>
    </div>
  )
}

export default Footer