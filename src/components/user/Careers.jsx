import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import banner from '../assets/careers/career-bg.avif'
import careerImg1 from '../assets/careers/career-2.avif'
import { Link } from 'react-router-dom';

function Careers() {
  return (
    <div>
        <Navigation />
        <div className='img-con-slider relative max-sm:mt-16'>
            <div className='img-con'>
                <img className='object-cover object-center h-full brightness-50' src={banner} alt="" />
            </div>
            <div className="absolute top-0 text-white left-0 right-0 bottom-0 flex items-center justify-center">
                <div className='flex items-center flex-col text-center'>
                    <div className='text-3xl w-3/4 leading-relaxed font-normal max-md:text-2xl mb-5'>
                        Start your career here at Yakal's Coffee Shop
                    </div>
                    <Link to="/contact">
                        <button className='border hover:bg-amber-800
                            hover:border-transparent
                            max-md:text-xs max-md:py-2 max-md:px-4 
                            hover:bg-opacity-50 px-6 py-2 font-semibold tracking-wider
                            text-base rounded-md'>Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center mt-7 px-10'>
            <div className='max-w-screen-lg w-full'>
                <div className='text-center text-amber-800 font-medium text-4xl'>
                    Careers
                </div>
                <div className='leading-8 text-lg font-light my-6 max-md:text-center max-md:text-base
                max-md:leading-8'>
                    Join us and be part of our passionate team dedicated to delivering exceptional coffee experiences. We offer a welcoming and thriving environment for personal and professional growth.
                </div>
                <div className='flex items-start justify-between gap-6'>
                    <div className='text-center flex flex-col font-light text-gray-700 gap-6
                    leading-7' style={{fontSize: "15px"}}>
                        <div>
                            Providing great products only brings our customers to our door. Having them come back on a regular basis requires that we provide them with a Total Quality Experience and that we hire Simply the Best® candidates.
                        </div>
                        <div>
                            We hire for our core values and identify candidates who match the characteristics described in our Guiding Principles.
                        </div>
                        <div>
                            We provides an environment where you can be yourself and have fun serving our customers on a daily basis. With our growth and expansion, we offer continuous development and an opportunity for career advancement. It is more important for us to identify "who you are" as opposed to "what you can do."
                        </div>
                        <div>
                            If you are looking for an opportunity where you can interact with people, smile, get involved in the local community, and have fun, we want to talk to you about joining our growing and diverse team.
                        </div>
                        <div>Our shop is an Equal Employment Opportunity employer.</div>
                    </div>

                    <div>
                        <div className='max-w-4xl rounded-md overflow-hidden max-lg:hidden'>
                            <img src={careerImg1} className="h-full w-full object-contain object-center" alt="" />
                        </div>
                    </div>
                </div>
                <div className='my-6 leading-8 text-lg font-light max-md:text-center max-md:text-base
                max-md:leading-8'>
                    We offer a positive and inclusive work environment, competitive compensation packages, and opportunities for career growth and development. Join us and create remarkable coffee experiences together. Check our current job openings to find your perfect fit!
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Careers