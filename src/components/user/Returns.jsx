import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import FooterSidebar from './FooterSidebar';

function Returns() {
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
                            Returns & Exchanges
                        </div>
                        <div className='leading-7 font-light mt-3 max-md:text-sm max-md:leading-7'>
                            We strive to provide you with the finest quality coffee and exceptional customer service. We understand that occasionally, you may need to return or exchange a product. Please read our Returns & Exchanges Policy carefully to ensure a smooth and satisfactory experience.
                        </div>
                        <div className='mt-10'>
                            <div>
                                <span>1. </span>
                                <span className='font-semibold text-gray-700'>
                                    Eligibility for Returns & Exchanges
                                </span>
                            </div>
                            <div className="leading-8 font-light text-base my-1">
                                <div>
                                &#x2022; We accept returns and exchanges for unused and unopened products within 14 days of the original purchase date.
                                </div>
                                <div>
                              &#x2022; To be eligible, the item must be in its original packaging, undamaged, and in a resalable condition.
                                </div>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>2. </span>
                                <span className='font-semibold text-gray-700'>
                                Non-eligible Items
                                </span>
                            </div>
                            <div className="leading-8 font-light text-base my-1">
                                <div>
                                  &#x2022; Perishable products, such as freshly brewed coffee or food items, cannot be returned or exchanged.
                                </div>
                                <div>
                              &#x2022; Gift cards, vouchers, or other non-physical products are also non-returnable and non-refundable
                                </div>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>3. </span>
                                <span className='font-semibold text-gray-700'>
                                How to Initiate a Return or Exchange
                                </span>
                            </div>
                            <div className="leading-8 font-light text-base my-1">
                                <div>
                                  &#x2022; To initiate a return or exchange, please contact our customer support team either by phone or email. Provide them with your order details and a brief explanation of the reason for the return or exchange.
                                </div>
                                <div>
                              &#x2022; Our team will guide you through the process and provide any necessary instructions or documentation.
                                </div>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div>
                                <span>3. </span>
                                <span className='font-semibold text-gray-700'>
                                Refunds and Store Credits
                                </span>
                            </div>
                            <div className="leading-8 font-light text-base my-1">
                                <div>
                                  &#x2022; Once we receive and inspect the returned item, we will issue a refund to your original payment method or provide a store credit, as per your preference.
                                </div>
                                <div>
                              &#x2022; Refunds may take several business days to process, depending on your bank or credit card company.
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 leading-8 font-light text-base'>
                        Please note that our Returns & Exchanges Policy applies to purchases made directly through our website or physical store. For products purchased from authorized resellers, please refer to their respective return policies.
                        </div>

                        <div className='mt-10 leading-8 font-light text-base'>
                            If you have any further questions or require assistance, please don't hesitate to reach out to our friendly customer support team. We are here to ensure your satisfaction and help you with any concerns.
                        </div>

                        <div className='mt-10 leading-6 font-normal text-base'>
                            Thank you for choosing us. We appreciate your support and look forward to serving you again soon!
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Returns