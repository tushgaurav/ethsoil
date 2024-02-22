import React from 'react'
import Image from 'next/image';

import { Button } from './ui/button';

const ContactForm = () => {
    return (
        <section>
            <div className="    px-4 mx-auto max-w-screen-md">
                <h2 className="mb-2 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">Get in touch</h2>
                <p className="mb-4 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
                    Drop us a message to source through ethsoil.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        {/* <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label> */}
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
                    </div>
                    <div>
                        {/* <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label> */}
                        <input type="text" id="company" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Company" required />
                    </div>
                    <div className="sm:col-span-2">
                        {/* <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label> */}
                        <textarea id="message" rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message"></textarea>
                    </div>
                    {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
                    <Button variant={"outline"} size={"lg"} className="text-xl" >Contact Us</Button>
                </form>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <div className='w-auto bg-zinc-900 p-8'>
            <div className='flex flex-wrap justify-around px-4 py-8'>
                <div>
                    <Image src='/logo.png' width={150} height={50} alt='logo' />
                    <h1 className='text-xl py-4 text-zinc-400'>Your Gateway to Hassle-free Procurement and Sourcing</h1>

                    <div className="flex -mx-2">
                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Linkedin">
                            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>

                        </a>

                        <a href="mailto:test@testing.com" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" /></svg>
                        </a>

                    </div>
                </div>
                <div className='flex flex-wrap px-12 text-zinc-400' id="contact">
                    <ContactForm />
                    {/* <div className='px-6'>
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
                    </div> */}
                </div>

            </div>

            <div className='flex justify-center items-center text-zinc-400'>
                <h1>ethsoil &#169; {new Date().getFullYear()} All Rights Reserved</h1>
            </div>
        </div>
    )
}

export default Footer