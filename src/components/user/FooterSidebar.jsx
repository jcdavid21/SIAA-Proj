import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function FooterSidebar() {
    const location = useLocation()
 
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
        <div className='w-80 h-max border-r border-r-gray-600 max-md:hidden max-md:pl-5'>
            <div>
                <div className='font-medium text-gray-600 max-md:text-sm'>SITE TERMS</div>
                {siteTerms.map((item, itemIndex)=>{
                    const {text, href} = item
                    return(
                        <Link to={href} key={itemIndex}>
                            <div className={`font-light leading-8
                            max-md:!text-sm max-md:!leading-8 
                            ${location.pathname === href ? 'text-amber-800 font-normal' : ''}`} 
                            style={{fontSize: "15px"}}>
                                {text}
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className='leading-7 mt-5'>
                <div className='font-medium text-gray-600 max-md:text-sm'>CUSTOMER CARE</div>
                {customerCare.map((item, itemIndex)=>{
                    const {text, href} = item
                    return(
                        <Link to={href} key={itemIndex}>
                            <div className={`font-light leading-8
                            max-md:!text-sm max-md:!leading-8 
                            ${location.pathname === href ? 'text-amber-800 font-normal' : ''}`} 
                            style={{fontSize: "15px"}}>
                                {text}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterSidebar