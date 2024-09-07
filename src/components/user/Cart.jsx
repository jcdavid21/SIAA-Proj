import React from 'react'
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
import img1 from '../assets/menus/iced-coffee/cold-coffee-1.avif'
import { TbArrowsExchange } from "react-icons/tb";

function Cart() {
    const handleScroll = ()=>{
        window.scroll(0,0)
    }
  return (
    <div>
        <Navigation />
            <section className="mt-20 bg-white flex items-center justify-center max-md:block py-8 antialiased dark:bg-gray-100 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold sm:text-2xl pb-1">Shopping Cart</h2>
                    <hr className='border-b border-b-gray-600 w-2/12' />

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                            <Link to="#" className="shrink-0 md:order-1">
                                {/* <img className="h-20 w-20 dark:hidden" src={img1} alt="imac image1" /> */}
                                <img className="hidden h-24 w-24 dark:block rounded-md" src={img1} alt="imac image2" />
                            </Link>

                            <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                <div className="flex items-center">
                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 ">
                                    <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                    </svg>
                                </button>
                                <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" defaultValue="2" required />
                                <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                    <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                                </div>
                                <div className="text-end md:order-4 md:w-32">
                                <p className="text-base font-bold text-gray-900 ">$1,499</p>
                                </div>
                            </div>

                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                <div className='leading-6 text-sm'>
                                    <div><span className='font-medium text-amber-800'>Name: </span>Iced Coffee</div>
                                    <div><span className='font-medium text-amber-800'>Size: </span>16 fl oz</div>
                                    <div><span className='font-medium text-amber-800'>Toppings: </span>Spice Topping</div>
                                    <div><span className='font-medium text-amber-800'>Add-ins: </span>Ice</div>
                                </div>

                                <div className="flex items-center gap-4">
                                <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline 0">
                                    <TbArrowsExchange className='mr-1' />
                                    Modify
                                </button>

                                <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                    Remove
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                        <div className="hidden xl:mt-8 xl:block">
                            <h3 className="text-2xl font-semibold text-gray-900 ">People also bought</h3>
                                <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                                    <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                        <div className='flex items-center justify-center'>
                                            <Link to="#" className="shrink-0 md:order-1">
                                                {/* <img className="h-20 w-20 dark:hidden" src={img1} alt="imac image1" /> */}
                                                <img className="hidden h-44 w-44 dark:block rounded-full" src={img1} alt="imac image2" />
                                            </Link>
                                        </div>
                                    <div>
                                        <Link to="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline ">Iced Coffee</Link>
                                        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">This generation has some improvements, including a longer continuous battery life.</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-900 ">
                                        $399,99 
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center gap-2.5">
                                        <button className='w-full border border-gray-700 p-2 font-medium
                                        rounded-md hover:bg-amber-900 hover:border-transparent hover:text-white ease-in-out duration-300'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

                        <div className="space-y-4">
                            <div className="space-y-2">
                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                <dd className="text-base font-medium text-gray-900 ">$7,592.00</dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                <dd className="text-base font-medium text-green-600">-$299.00</dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                <dd className="text-base font-medium text-gray-900 ">$99</dd>
                            </dl>

                            <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                <dd className="text-base font-medium text-gray-900 ">$799</dd>
                            </dl>
                            </div>

                            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt className="text-base font-bold text-gray-900 ">Total</dt>
                            <dd className="text-base font-bold text-gray-900 ">$8,191.00</dd>
                            </dl>
                        </div>

                        <div className='w-full border border-gray-700 rounded-md  text-center py-2 text-sm
                        cursor-pointer font-medium hover:bg-amber-900 hover:border-transparent hover:text-white ease-in-out duration-300'>
                            <Link to="#" >Proceed to Checkout</Link>
                        </div>

                        <div className="flex items-center justify-center gap-2"
                        onClick={()=>handleScroll()}>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                            <Link to="/menu" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                            Continue Shopping
                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                            </Link>
                        </div>
                        </div>

                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <form className="space-y-4">
                            <div>
                            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 "> Do you have a voucher or gift card? </label>
                            <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="" required />
                            </div>
                            <div className='flex justify-end'>
                            <button type="submit" className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm border border-gray-700 
                            font-medium text-gray-900 hover:bg-primary-800 focus:outline-none focus:ring-4 
                            focus:ring-primary-300
                            hover:bg-amber-900 hover:border-transparent
                             hover:text-white ease-in-out duration-300">Apply Code</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Cart