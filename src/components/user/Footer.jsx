import React from 'react'
import logo from '../assets/logo-w-name.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Footer() {

    const handleNavigationClick = () => {
        window.scrollTo(0, 0); // Scroll to top
    }


    // const footerPages = [
    //     {text: "Contact", href: "/contact"},
    //     {text: "FAQs", href: "#"},
    //     {text: "Privacy Policy", href: "#"},
    //     {text: "Terms & Condition", href: "#"},
    //     {text: "About Us", href: "/about"},
    //     {text: "Reviews", href: "#"},
    // ]

    const aboutUs = [
        {text: "Careers", href: "/career"},
        {text: "Franchising", href: "/franchising"},
        {text: "Store Locator", href: "/location"},
        {text: "Reviews", href: "/reviews"},
    ]

    const siteTerms = [
        {text: "Terms of Use", href: "/termsofuse"},
        {text: "Privacy Policy", href: "/privacy"},
        {text: "Accessibility", href: "/accessibility"},
        {text: "Student Discount", href: "/studentdiscount"},
    ]

    const customerCare = [
        {text: "Contact Us", href: "/contact"},
        {text: "Returns", href: "/returns"},
        {text: "Shipping", href: "/shipping"},
        {text: "FAQ's", href: "/faqs"},
    ]
  return (
    <>
        {/* <div className='border-t border-t-white pt-4 px-12 bg-amber-950 bg-opacity-90'>
            <div className='flex items-center justify-center'>
                <div className='max-w-5xl w-full'>
                    <div className='w-full flex justify-center mb-6 '>
                        <div className='h-20 w-20 bg-white py-2 rounded-full'>
                            <img className='h-full object-contain' src={logo} alt="" />
                        </div>
                    </div>
                    <div className=' flex justify-between gap-6 max-md:grid max-md:grid-cols-2'>
                        {footerPages.map((item, itemIndex)=>(
                            <Link to={item.href} key={itemIndex}>
                                <div 
                                onClick={()=>{handleNavigationClick()}}
                                className='hover:text-white
                                 text-slate-200 font-light'>
                                    {item.text}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-10 mt-8 pb-2 text-slate-200 font-light'>
                <div className='text-sm'>©Yakal Cafe 2024</div>
                <div className='flex gap-2 text-lg'>
                    <FaFacebook className=' cursor-pointer' />
                    <FaInstagram className=' cursor-pointer' />
                    <FaSquareXTwitter className=' cursor-pointer' />
                </div>
            </div>
        </div> */}
        
        <footer>
            <div className='border-t border-t-gray-400 flex items-center justify-center px-20'>
                <div className='flex max-w-5xl w-full gap-20 justify-between py-8 pb-6 max-md:grid max-md:grid-cols-2'>
                    <div className='w-44'>
                        <div className='font-semibold text-base text-gray-800 mb-2'>ABOUT US</div>
                        <div className='leading-8 text-sm font-light text-gray-800'>
                            {aboutUs.map((item, itemIndex)=>{
                                const {text, href} = item
                                return(
                                    <Link to={href} onClick={handleNavigationClick} key={itemIndex}>
                                        <div>{text}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className='w-44'>
                        <div className='font-semibold text-base text-gray-800 mb-2'>SITE TERMS</div>
                        <div className='leading-8 text-sm font-light text-gray-800'>
                            {siteTerms.map((item, itemIndex)=>{
                                const {text, href} = item
                                return(
                                    <Link to={href} onClick={handleNavigationClick} key={itemIndex}>
                                        <div>{text}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className='w-44'>
                        <div className='font-semibold text-base text-gray-800 mb-2'>CUSTOMER CARE</div>
                        <div className='leading-8 text-sm font-light text-gray-800'>
                            {customerCare.map((item, itemIndex)=>{
                                const {text, href} = item
                                return(
                                    <Link to={href} onClick={handleNavigationClick} key={itemIndex}>
                                        <div>{text}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div className='h-32'>
                            <img className='h-full text-lg w-full object-contain' src={logo} alt="" />
                        </div>
                        <div className='flex items-center justify-center gap-10 mt-8 pb-2 font-light'>
                            <div className='flex gap-2 text-2xl text-gray-800'>
                                <FaFacebook className=' cursor-pointer' />
                                <FaInstagram className=' cursor-pointer' />
                                <FaSquareXTwitter className=' cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-sm text-center font-medium
             text-gray-800 border-t border-t-gray-300
             pt-1'>
                ©Yakal Cafe 2024
            </div>
        </footer>
    </>
  )
}

export default Footer