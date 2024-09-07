import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';
import banner from '../assets/careers/banner-4.avif'

function Faqs() {
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
                            Frequently Asked Questions
                        </div>
                        <div className='w-full h-72'>
                            <img className='h-full w-full object-cover' src={banner} alt="" />
                        </div>

                        <div className='mt-10 font-medium text-3xl pb-2 border-b border-b-gray-400'>
                            Most Popular
                        </div>


                        <div className='mt-10'>
                            <div>
                                <span>1. </span>
                                <span className='font-semibold text-gray-800'>
                                What are your business hours?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Monday-Thursday: 7:00AM - 8:00PM
                            </div>
                            <div className='leading-8 font-light text-base my-1 mt-1'>
                            &#x2022; Friday-Saturday: 9:00AM - 7:00PM
                            </div>
                            <div className='leading-8 font-light text-base my-1 mt-1'>
                            &#x2022; Sunday: 6:00AM - 6:00PM
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>2. </span>
                                <span className='font-semibold text-gray-800'>
                                What are you located?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Our coffee shop is located at OLFU QC. You can find detailed directions on our website's contact page.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>3. </span>
                                <span className='font-semibold text-gray-800'>
                                Do you offer Wi-Fi?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Yes, we provide free Wi-Fi for our customers to enjoy while they visit our coffee shop.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>4. </span>
                                <span className='font-semibold text-gray-800'>
                                What types of coffee do you serve?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; We offer a wide variety of coffee options, including espresso-based drinks, pour-over coffee, cold brew, and flavored coffees. Check out our menu for more details.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>5. </span>
                                <span className='font-semibold text-gray-800'>
                                Can I order coffee online?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Yes, we offer online ordering through our website. Simply browse our menu, select your desired items, and proceed to checkout.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>6. </span>
                                <span className='font-semibold text-gray-800'>
                                Do you offer any non-coffee beverages?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Absolutely! In addition to our coffee selection, we offer a range of teas, hot chocolates, smoothies, and other refreshing beverages.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>7. </span>
                                <span className='font-semibold text-gray-800'>
                                Do you have outdoor seating?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Yes, we have outdoor seating available for those who prefer to enjoy their coffee outdoors. It's a great way to relax and soak up some fresh air.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>8. </span>
                                <span className='font-semibold text-gray-800'>
                                Are you pet-friendly?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Yes, we welcome well-behaved furry friends on our outdoor patio. Just make sure to keep them on a leash and clean up after them.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>9. </span>
                                <span className='font-semibold text-gray-800'>
                                Can I reserve a table in advance?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; Unfortunately, we do not currently accept table reservations. Seating is available on a first-come, first-served basis.
                            </div>
                        </div>
                        
                        <div className='mt-10'>
                            <div>
                                <span>10. </span>
                                <span className='font-semibold text-gray-800'>
                                How can I provide feedback or ask further questions?
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            &#x2022; We value your feedback and are here to address any inquiries you may have. You can reach out to us through the contact form on our website, via email, or by phone
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

export default Faqs