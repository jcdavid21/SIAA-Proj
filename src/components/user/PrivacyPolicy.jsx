import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';

function PrivacyPolicy() {
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
                            Privacy Policy
                        </div>

                        <div className='mt-3'>
                            <div><span>1. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Introduction
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                Thank you for visiting our coffee shop website. In our shop, we value and respect your privacy. This Privacy Policy outlines the types of personal information we collect, how we use and protect that information, and your rights and choices regarding your personal information. By accessing and using our website, you consent to the practices described in this policy.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>2. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Information We Collect
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                <span className='font-normal'>2.1 Personal Information</span> 
                            </div>
                            <div className='leading-8 font-light text-base'>
                                When you visit our website, we may collect personal information that you provide voluntarily, such as your name, email address, phone number, and any other information you choose to provide when contacting us or placing an order.
                            </div>

                            <div className='leading-8 font-light text-base my-3 mt-5'>
                                <span className='font-normal'>2.2 Usage Information</span> 
                            </div>
                            <div className='leading-8 font-light text-base'>
                                We may also collect non-personal information automatically when you interact with our website. This may include your IP address, browser type, operating system, referring URLs, and pages visited on our website. We may use cookies and similar technologies to collect this information.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>3. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Use of Informaiton
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                <span className='font-normal'>3.1 Providing Services</span> 
                            </div>
                            <div className='leading-8 font-light text-base'>
                                To process and fulfill your orders, respond to inquiries or requests, and provide you with the best possible customer experience.
                            </div>

                            <div className='leading-8 font-light text-base my-3 mt-5'>
                                <span className='font-normal'>3.2 Improving Our Website</span> 
                            </div>
                            <div className='leading-8 font-light text-base'>
                                To analyze trends, monitor website usage, and enhance the functionality and performance of our website.
                            </div>

                            <div className='leading-8 font-light text-base my-3 mt-5'>
                                <span className='font-normal'>3.3 Communication</span> 
                            </div>
                            <div className='leading-8 font-light text-base'>
                                To communicate with you regarding your orders, provide updates, promotional offers, and relevant information about our products, services, and events. You may choose to opt-out of receiving such communications at any time.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>4. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Data Security
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission or storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>5. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Your Rights and Choices
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                            You have the right to access, update, and correct your personal information. You may also have the right to request the deletion or restriction of your personal information, as well as the right to object to the processing of your personal information. To exercise these rights or if you have any questions or concerns about our privacy practices, please contact us using our contact page.
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

export default PrivacyPolicy