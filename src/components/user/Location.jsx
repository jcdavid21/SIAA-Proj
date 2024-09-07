import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import bg from '../assets/location-bg.avif'
import home from '../assets/home/poster-2.jpg'

function Location() {
  return (
    <div>
        <Navigation/>
        <div className='img-con-slider relative max-md:mt-20 flex items-center justify-center'>
            <div className="img-con w-full">
                <img className='h-full object-cover object-center brightness-50' src={bg} alt="" />
            </div>
            <div className='absolute text-center text-white'>
                <div className="text-5xl font-medium mb-2 max-md:text-3xl">Looking for a cafe?</div>
                <div className="text-lg mb-4 max-md:text-base">Visit our cafe near OLFU QC</div>
                <a href="#loc">
                    <button className="px-6 py-2 border border-gray-200 rounded-md
                    font-medium hover:bg-amber-800 hover:bg-opacity-50
                    hover:border-transparent
                    max-md:text-sm">Browse our location</button>
                </a>
            </div>
        </div>

        <div className='flex items-center justify-center px-4 mb-20 -mt-6'>
            <div className='max-w-screen-xl flex gap-10 w-full'>
                <div className='w-96 max-lg:hidden'>
                    <div className='h-56'>
                        <img className='h-full w-full brightness-90 object-cover object-center' src={home} alt="" />
                    </div>
                    <div className='shadow-md mt-5 border p-4 border-gray-100 rounded-lg'>
                        <div className='text-center pb-2 border-b border-b-gray-500
                        mb-4 text-amber-800 font-medium text-lg'>Discover Our Location</div>
                        <div className='leading-8 font-light text-sm'>
                            Find your way to Yakal's Cafe, where the aroma of freshly brewed coffee 
                            meets the vibrant ambiance of our café. Located conveniently near OLFU QC, 
                            we're excited to welcome you. Come and experience our unique blend of flavors 
                            and atmosphere, designed to make every visit unforgettable.
                        </div>
                    </div>
                </div>

                <div className='flex-1 z-10'>
                    <div className='flex justify-between mb-6 gap-10 max-md:flex-col max-md:gap-2'>
                        <div className='bg-white shadow-md px-6 py-4 rounded-sm flex-1' id="loc">
                            <div className='text-center text-2xl font-medium text-amber-800
                            border-b border-b-gray-500 pb-1 mb-3'>Details</div>
                            <div className='font-medium leading-8 text-sm text-gray-800 tracking-wide'><span className='text-amber-800 font-semibold'>
                                Address: 
                                </span> Our Lady Of Fatima University
                            </div>
                            <div className='font-medium leading-8 text-sm text-gray-800 tracking-wide'><span className='text-amber-800 font-semibold'>
                                Contact: 
                                </span> 09565535401
                            </div>
                            <div className='font-medium leading-8 text-sm text-gray-800 tracking-wide'><span className='text-amber-800 font-semibold'>
                                Email: 
                                </span> yakalcafe@gmail.com
                            </div>
                        </div>
                        <div className='bg-white shadow-md px-6 py-4 rounded-sm flex-1'>
                            <div className='text-center text-2xl font-medium text-amber-800
                            border-b border-b-gray-500 pb-1 mb-3'>Cafe Hours</div>
                            <div className='font-medium leading-8 text-sm text-gray-800 tracking-wide'><span className='text-amber-800 font-semibold'>
                                Monday-Thursday: 
                                </span> 7:00AM - 8:00PM
                            </div>
                            <div className='font-medium leading-8 text-sm text-gray-800 tracking-wide'><span className='text-amber-800 font-semibold'>
                                Friday-Saturday: 
                                </span> 9:00AM - 7:00PM
                            </div>
                            <div className='font-medium leading-8 text-sm text-gray-800 tracking-wide'><span className='text-amber-800 font-semibold'>
                                Sunday: 
                                </span> 6:00AM - 6:00PM
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <iframe className='w-full border-0' title='map' src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.605799054602!2d121.0683754154198!3d14.734865189717096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b070540c1241%3A0x95e787ea9415e71b!2sOur%20Lady%20Of%20Fatima%20University%2C%20Quezon%20City!5e0!3m2!1sen!2sph!4v1678265894088!5m2!1sen!2sph" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}


export default Location