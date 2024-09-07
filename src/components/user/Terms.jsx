import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';
import { Link } from 'react-router-dom';

function Terms() {
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
                            Terms of use for our website
                        </div>
                        <div className='leading-8 font-light max-md:text-sm max-md:leading-8'>
                            These Terms of Use govern your access and use of our website, 
                            including any content, features, and services provided through the website. By accessing or using our website, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, please refrain from using our website.
                        </div>

                        <div className='mt-10'>
                            <div><span>1. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Website Use
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                A. You may use our website for personal and non-commercial purposes only. Any unauthorized use or modification of the website may violate applicable laws and regulations.
                            </div>
                            <div className='leading-8 font-light text-base'>
                                B. You are solely responsible for any information you provide on our website, ensuring that it is accurate, lawful, and does not infringe on any third-party rights.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>2. </span> 
                                <span className='font-semibold text-gray-700'>
                                    User Accounts
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                A. Certain features or services on our website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                            </div>
                            <div className='leading-8 font-light text-base'>
                                B. You agree to provide accurate and complete information when creating your account and to update it promptly if any changes occur. <span className='font-medium italic'>Our shop</span> reserves the right to terminate or suspend your account if we suspect any unauthorized or fraudulent activity.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>3. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Privacy
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                A. Our Privacy Policy governs the collection, use, and disclosure of personal information we receive from users of our website. By using our website, you agree to our Privacy Policy.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>4. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Changes to Terms of Use
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                A. We reserve the right to modify or update these Terms of Use at any time. Any changes will be effective immediately upon posting on our website. By continuing to use our website, you agree to be bound by the revised Terms of Use.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>5. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Privacy
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                A. If you have any questions or concerns about these Terms of Use, please contact us <span className='text-blue-700'>
                                    <Link to='/contact'>here</Link></span>.
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

export default Terms