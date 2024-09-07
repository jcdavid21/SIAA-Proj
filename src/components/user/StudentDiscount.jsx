import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';
import banner from '../assets/careers/banner-2.avif'

function StudentDiscount() {
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
                            Introducing our Exclusive Student Discount!
                        </div>
                        <div className='w-full h-72'>
                            <img className='h-full w-full object-cover' src={banner} alt="" />
                        </div>
                        <div className='leading-7 font-light mt-3 max-md:text-sm max-md:leading-7'>
                            We understand that being a student can sometimes mean juggling tight budgets while fueling your passion for knowledge. That's why we're thrilled to offer an exclusive student discount to make your coffee breaks even more enjoyable and affordable.
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span className='font-semibold text-gray-700'>
                                    Who is eligible?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                All currently enrolled students with valid student identification from universities, colleges, high schools, or other educational institutions are eligible for our student discount. We want to support students at every level of their educational journey.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span className='font-semibold text-gray-700'>
                                    What's the discount?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                You'll receive a 10% discount on all purchases made at our coffee shop. Whether you're craving a steaming cup of our specialty coffee or indulging in one of our delicious pastries, this discount is our way of saying "thank you" for your hard work and dedication.
                            </div>
                        </div>


                        <div className='mt-10'>
                            <div>
                                <span className='font-semibold text-gray-700'>
                                    How to claim the discount?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                    To enjoy the benefits of our student discount, simply present your valid student ID at the time of purchase. Our friendly staff will apply the discount to your order, ensuring you get the full value of your student status.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span className='font-semibold text-amber-800'>
                                    Why choose our cafe?
                                </span>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div><span>1. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Exceptional Quality
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                We take pride in sourcing the finest coffee beans, carefully crafted by our expert baristas to create the perfect cup of coffee. Every sip is a delightful experience.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>2. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Diverse Menu
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                Our menu boasts an impressive selection of beverages, including rich espressos, creamy lattes, refreshing iced coffees, and more. Pair your drink with our delectable pastries, sandwiches, or snacks for the ultimate indulgence.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>3. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Cozy Ambiance
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                Our coffee shop provides a warm and inviting atmosphere, where you can relax, study, or catch up with friends. Take advantage of our free Wi-Fi and comfortable seating to make the most of your time at our establishment.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>4. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Community Engagement
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                We strive to be more than just a coffee shop. We actively engage with our local community, hosting events, supporting local artists, and fostering a welcoming space for everyone.
                            </div>
                        </div>

                        <div className='mt-10 leading-8 font-light text-base'>
                            Don't miss out on this exclusive student discount. We believe that every student deserves a little extra support, and we're excited to be a part of your academic journey. Visit us today and experience the perfect blend of quality, affordability, and student-friendly service.
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default StudentDiscount