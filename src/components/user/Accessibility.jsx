import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';

function Accessibility() {
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
                            Accessibility
                        </div>
                        <div className='leading-7 font-light max-md:text-sm max-md:leading-7'>
                            We strive to provide an inclusive and accessible experience for all our customers. We believe that everyone should have equal access to our website and services. To ensure that everyone can enjoy our offerings, we have implemented the following accessibility measures:
                        </div>

                        <div className='mt-10'>
                            <div><span>1. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Website Accessibility
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                We have designed our website with accessibility in mind. We aim to comply with applicable accessibility standards and guidelines to ensure that our website is usable and accessible to individuals with disabilities.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>2. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Alternative Formats
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                If you encounter any difficulties accessing the information on our website, please contact us. We will make reasonable efforts to provide the information in an alternative format that is accessible to you.
                            </div>
                        </div>


                        <div className='mt-10'>
                            <div><span>3. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Assistance
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base my-3 mt-1'>
                                Our friendly staff is trained to provide assistance to individuals with disabilities. If you require any assistance while visiting our coffee shop, please do not hesitate to ask. We are here to help and ensure your visit is enjoyable.
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div><span>4. </span> 
                                <span className='font-semibold text-gray-700'>
                                    Feed Back
                                </span>
                            </div>
                            <div className='leading-8 font-light text-base mt-1'>
                                We value your feedback and strive to improve our accessibility. If you have any suggestions or encounter any barriers to accessibility, please let us know. Your input will help us enhance our accessibility efforts.
                            </div>
                        </div>

                        <div className='mt-10 leading-8 font-light text-base'>
                            We are committed to providing an inclusive environment for all our customers. We will continue to review and improve our accessibility practices to ensure that everyone feels welcome and can fully enjoy our coffee shop experience.
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Accessibility