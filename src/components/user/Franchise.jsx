import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import banner from '../assets/franchise/banner.avif'
import map from '../assets/franchise/map.png'

function Franchise() {
  return (
    <div>
        <Navigation />
        <div className='img-con-slider relative max-sm:mt-16'>
            <div className='img-con'>
                <img className='object-cover object-center h-full brightness-90' src={banner} alt="" />
            </div>
        </div>

        <div className='flex items-center justify-center mt-7 px-10 mb-6'>
            <div className='max-w-screen-lg w-full'>
                <div>
                    <div className='text-3xl font-medium text-amber-900 mb-2
                    max-md:text-2xl'>OUR BRAND HERITAGE</div>
                    <div className='leading-8 font-light  max-md:text-sm max-md:leading-7'>
                        Welcome to our coffee shop, where every cup tells a story deeply rooted in our rich heritage. Our journey began years ago, when our founder's love for coffee sparked a vision to create a haven for coffee connoisseurs. We invite you to join our family and become part of our coffee-loving community. Embrace our heritage, and together, let's create memorable experiences for coffee enthusiasts around the world.
                    </div>
                    <div>
                        <img src={map} alt="" />
                    </div>
                    <div className='text-2xl font-medium text-amber-900 mb-2
                    max-md:text-2xl'>Franchise Opportunities</div>
                    <div className='leading-8 font-light max-md:text-sm max-md:leading-7'>
                        Our franchise offers a delightful selection of premium coffee blends, expertly crafted by our passionate baristas. Savor every sip of our meticulously prepared beverages, from classic espresso-based drinks to creative specialty concoctions. Whether you're seeking a quick caffeine fix or a tranquil space to unwind, our coffee shop franchise provides a haven for coffee enthusiasts and casual customers alike. Explore our franchise opportunities and join our community of dedicated coffee lovers committed to delivering exceptional quality and unmatched customer service. Embrace the art of coffee with us and embark on a rewarding journey as a franchisee.
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default Franchise