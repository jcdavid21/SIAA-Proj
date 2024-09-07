import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import banner from '../assets/contact-us.avif'

function Reviews() {

    const rates = [
        {rate: 5, count: 23},
        {rate: 4, count: 19},
        {rate: 3, count: 12},
        {rate: 2, count: 3},
        {rate: 1, count: 2}
    ]
    const reviews =[
        {id: 1, rate: 5, name: "Jc David", date: "April 22, 2022", comment: "Maganda naman"},
        {id: 2, rate: 4, name: "Jc David", date: "April 22, 2022", comment: "Maganda naman"},
        {id: 3, rate: 3, name: "Jc David", date: "April 22, 2022", comment: "Maganda naman"},
    ]
  return (
    <div>
        <Navigation />
        <div className='img-con-slider relative max-sm:mt-16'>
            <div className='img-con'>
                <img className='object-cover object-center h-full brightness-50' src={banner} alt="" />
            </div>
            <div className="absolute top-0 text-white left-0 right-0 bottom-0 flex items-center justify-center">
                <div className='flex items-center flex-col text-center'>
                    <div className='text-5xl font-medium max-md:text-2xl'>Rate Us</div>
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
        <div className='flex h-lvh max-lg:h-full items-center justify-center mt-10 mb-10' id='contact'>
            <div className='max-w-screen-lg w-full'>
                <div className='flex justify-between max-lg:flex-col px-4 max-lg:gap-3'>
                    <div className='max-w-2xl w-full'>
                        <div className='text-xl font-medium mb-3'>Customer Review</div>
                        <div className='leading-8 font-light max-lg:leading-7'>
                            Your feedback is important to us. At Yakal Cafe, we're committed to delivering the finest coffee, a welcoming ambience, and exceptional service. Share your thoughts and help us continue to create the perfect experience for you.
                        </div>
                    </div>

                    <div className='px-3 w-72 py-2 rounded-sm border border-gray-700'>
                        <div className='border-b border-b-gray-700
                        pb-1 font-medium text-sm'>Based on 213 reviews</div>
                        {rates.map((item, itemIndex)=>(
                            <div className='mt-3 flex gap-3 justify-between'>
                                <div className='flex gap-2 text-amber-900'>
                                    {Array.from({length: 5}).map((_, i)=>(
                                        i < item.rate ? <FaStar key={i} /> : <FaRegStar key={i} />
                                    ))}
                                </div>
                                <div className='font-medium text-sm'>({item.count})</div>
                                <div className='text-sm'>{item.rate} out of 5</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex gap-10 justify-between mt-10 border-t border-t-gray-300
                pt-4 max-lg:flex-col-reverse'>
                    <div className="flex-1 overflow-auto px-5 flex flex-col gap-5 py-6 h-96 border-r border-r-gray-500">
                        <div className="flex flex-col gap-4 bg-gray-100 border border-gray-300 p-6 rounded-sm">
                            <div className="flex items-center gap-2 border-b border-b-gray-400 pb-1">
                                <div className="flex gap-1 text-amber-900">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="text-sm font-medium">5 out of 5 Stars</div>
                            </div>
                            <div className="flex gap-3">
                                <div className="font-medium">Alber Dean</div>
                                <div className="font-light italic">- April 24, 2022</div>
                            </div>
                            <div>
                                Maganda naman
                            </div>
                        </div>

                        
                    </div>


                    <div className='flex-1 h-max'>
                        <form action="" className='flex flex-col gap-2 max-lg:px-7'>
                            <div className='font-medium text-xl mb-3 pb-1'>Write a Review</div>
                            <div className=' flex justify-between border-b border-b-gray-500 pb-2'>
                                <label htmlFor="rate"
                                    className='text-base font-medium'>Rate Us <span className='text-red-700'>*</span>
                                </label>
                              <select name="rate" id="rate" className='border border-gray-500
                              text-sm w-32 px-1 rounded-sm'>
                                <option value="" disabled selected>Select rate...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                            <div>
                                <label htmlFor="name"
                                    className='text-sm font-light'>Name <span className='text-red-700'>*</span>
                                </label>
                                <input className='w-full border mt-1 border-slate-500 p-2 
                                rounded-sm text-sm' 
                                type="text" id='name' name='name' placeholder='Enter your name' />
                            </div>

                            <div>
                                <label htmlFor="email"
                                    className='text-sm font-light'>Email <span className='text-red-700'>*</span>
                                </label>
                                <input className='w-full border mt-1 border-slate-500 p-2 
                                rounded-sm text-sm' 
                                type="email" id='email' name='email' placeholder='Enter your email' />
                            </div>
                            
                            <div>
                                <label htmlFor="message"
                                    className='text-sm font-light'>Message <span className='text-red-700'>*</span>
                                </label>
                                <textarea name="message" id="message" cols="30" rows="5"
                                className='border border-slate-500 w-full rounded-sm'>
                                </textarea>
                            </div>
                            

                            <div className='w-full'>
                                <button className='w-full bg-gray-800 font-medium tracking-wide
                                hover:bg-gray-700 text-white p-2 px-7 rounded-sm'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Reviews