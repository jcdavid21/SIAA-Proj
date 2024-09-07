import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import banner from '../assets/contact-us.avif'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div>
        <Navigation />
        <div className='img-con-slider relative max-sm:mt-16'>
            <div className='img-con'>
                <img className='object-cover object-center h-full brightness-50' src={banner} alt="" />
            </div>
            <div className="absolute top-0 text-white left-0 right-0 bottom-0 flex items-center justify-center">
                <div className='flex items-center flex-col text-center'>
                    <div className='text-5xl font-medium max-md:text-2xl'>Contact Us</div>
                    <div className='banner-cap my-5 font-light max-md:my-2 max-md:w-96 
                        max-md:text-xs'> 
                        Drop by our cozy café and enjoy a cup of coffee while we chat. Our 
                        friendly staff is always ready to assist you.
                    </div>
                    <a href="#contact">
                        <button className='border hover:bg-amber-800
                            hover:border-transparent
                            max-md:text-xs max-md:py-2 max-md:px-4 
                            hover:bg-opacity-50 px-6 py-2 font-semibold tracking-wider
                            text-base rounded-md'>Get in Touch
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center py-20 mb-4' id='contact'>
            <div className='flex gap-20 max-w-screen-xl w-full px-6 max-md:flex-col
            max-md:gap-6'>
                <div className='flex-1 text-center flex flex-col gap-4 items-center'>
                    <div className='text-4xl font-medium text-amber-800'>Got Questions?</div>
                    <div className=' leading-7 font-light max-md:font-extralight'>
                        We're here to help! Reach out to the Cafe team for expert assistance and 
                        personalized service tailored to your coffee experience. Whether you're looking 
                        for recommendations, have questions about our offerings, or are interested in 
                        collaborating with us, our dedicated staff is just a click or call away.
                    </div>
                    <div className='flex gap-2 text-2xl'>
                        <FaFacebook className=' cursor-pointer' />
                        <FaInstagram className=' cursor-pointer' />
                        <FaSquareXTwitter className=' cursor-pointer' />
                    </div>
                </div>

                <div className='flex-1'>
                    <form action="" className='flex flex-col gap-5'>
                        <div>
                            <label htmlFor="name"
                                className='text-sm font-light'>Name <span className='text-red-700'>*</span>
                            </label>
                            <input className='w-full border mt-1 border-slate-500 p-2 
                            rounded-md text-sm' 
                            type="text" id='name' name='name' placeholder='Enter your name' />
                        </div>

                        <div>
                            <label htmlFor="email"
                                className='text-sm font-light'>Email <span className='text-red-700'>*</span>
                            </label>
                            <input className='w-full border mt-1 border-slate-500 p-2 
                            rounded-md text-sm' 
                            type="email" id='email' name='email' placeholder='Enter your email' />
                        </div>
                        
                        <div>
                            <label htmlFor="message"
                                className='text-sm font-light'>Message <span className='text-red-700'>*</span>
                            </label>
                            <textarea name="message" id="message" cols="30" rows="10"
                            className='border border-slate-500 w-full rounded-md'>
                            </textarea>
                        </div>

                        <div className='flex justify-end'>
                            <button className='bg-amber-800 font-medium tracking-wide
                            hover:bg-amber-900 text-white p-2 px-7 rounded-full'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Contact