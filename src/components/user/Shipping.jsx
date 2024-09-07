import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';
import banner from '../assets/careers/banner-3.avif'

function Shipping() {
  return (
    <div>
        <Navigation/>
        <div className='flex items-center justify-center px-6 mt-32 mb-10 max-md:px-6'>
            <div className='max-w-screen-xl w-full flex justify-between items-start gap-20
            max-md:gap-4'>
                <FooterSidebar/>
                <div className='max-w-screen-lg w-full'>
                    <div>
                        <div className='text-gray-800 font-semibold text-lg mb-2
                        max-md:text-base'>
                            Our Fast and Flavorful Coffee Shop Shipping!
                        </div>
                        <div className='w-full h-72'>
                            <img className='h-full w-full object-cover' src={banner} alt="" />
                        </div>
                        <div className='leading-7 font-light mt-3 max-md:text-sm max-md:leading-7'>
                            We are passionate about delivering exceptional coffee experiences right to your doorstep. Now, you can enjoy the rich aromas and exquisite flavors of our carefully crafted coffees from the comfort of your own home. We take pride in ensuring that each cup of coffee we ship embodies the same freshness and quality as if you were sipping it in our cozy coffee shop.
                        </div>

                        <div className='mt-10 font-semibold text-gray-700'>
                        Here's what you can expect from our seamless shipping service
                        </div>


                        <div className='mt-10'>
                            <div>
                                <span>1. </span>
                                <span className='font-semibold text-gray-700'>
                                Speedy Delivery
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                We understand the anticipation that comes with waiting for your favorite coffee to arrive. That's why we prioritize quick processing and shipping to get your order to you as swiftly as possible. Our dedicated shipping partners work tirelessly to ensure your coffee is delivered to your door in the shortest time frame.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>2. </span>
                                <span className='font-semibold text-gray-700'>
                                Secure Packaging
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                To preserve the optimal flavor and quality of our coffee during transit, we use specially designed packaging materials. Our airtight bags prevent exposure to oxygen and light, protecting the beans from moisture and ensuring they retain their delightful taste until they reach your kitchen.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>3. </span>
                                <span className='font-semibold text-gray-700'>
                                Shipping Within Metro Manila
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                            Whether you're a coffee enthusiast in a bustling city or a small town, we're delighted to serve customers across the country. No matter where you are, we'll make sure your coffee reaches you, allowing you to indulge in the finest brews without leaving your home.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>4. </span>
                                <span className='font-semibold text-gray-700'>
                                Dedicated Customer Support
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                Your satisfaction is our top priority. If you have any questions or concerns regarding your coffee shipment, our friendly and knowledgeable customer support team is here to assist you. We're just an email or phone call away, ready to ensure your coffee experience exceeds your expectations.
                            </div>

                            <div className='leading-8 font-light text-base my-3 mt-5'>
                                Treat yourself or surprise a fellow coffee lover with our remarkable coffee shipping service. Visit our website now and embark on a delightful journey through the world of specialty coffee, conveniently delivered to your doorstep.
                            </div>

                            <div className='leading-6 font-light my-3 mt-5 text-gray-500 italic'>
                                *Shipping times and availability may be subject to change based on external factors and location-specific restrictions.
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Shipping