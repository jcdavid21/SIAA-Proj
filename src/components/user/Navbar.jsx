import React, { useState, useEffect } from 'react';
import { IoIosArrowDropdown, IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import logoOnly from '../assets/logo-w-name.png';
import Swal from 'sweetalert2'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');
  const [textBlack, setTextBl] = useState('text-white');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const [borderBlack, setBorderBl] = useState('border-white')

  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Menu', href: '/menu', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
  ];

  const handleLogOut = ()=>{
    localStorage.removeItem('isLoggeIn')
    setCheckUser(!checkUser)
  }

  navigation.forEach(item => {
    item.current = location.pathname === item.href;
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const linkToCart = ()=>{
    Swal.fire({
        title: "You need to log in first",
        text: "Go to sign up if you don't have account.",
        icon: "warning"
      });
  }

  const handleNavigationClick = () => {
    window.scrollTo(0, 0); // Scroll to top
  }
  

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) === true;

    if(isUserLoggedIn){
        setCheckUser(isUserLoggedIn)
    }

    const handleScroll = () => {
    if(location.pathname !== '/menu' && location.pathname !== '/signin' && location.pathname  !== '/signup'
    && location.pathname !== '/cart' && location.pathname !== '/termsofuse' 
    && location.pathname  !== '/privacy' && location.pathname  !== '/accessibility'
    && location.pathname  !== '/studentdiscount' && location.pathname  !== '/returns'
    && location.pathname  !== '/shipping' && location.pathname  !== '/faqs'){
      if (window.scrollY > 50) {
        setNavbarBg('bg-white shadow-md');
        setTextBl('text-black');
        setBorderBl('border-black')
      } else {
        setNavbarBg('bg-transparent');
        setTextBl('text-white');
        setBorderBl('border-white');
      }
    }
  };

  if(location.pathname === '/menu' || location.pathname === '/signin' || location.pathname === '/signup'
  || location.pathname === '/cart' || location.pathname === '/termsofuse'
  || location.pathname === '/privacy' || location.pathname  === '/accessibility'
  || location.pathname  === '/studentdiscount' || location.pathname  === '/returns'
  || location.pathname  === '/shipping' || location.pathname  === '/faqs'){
    setNavbarBg('bg-white shadow-md');
    setBorderBl('border-black')
    setTextBl('text-black');
  }

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [location.pathname]);

return (
  <div className={`${navbarBg} fixed w-full top-0 max-md:bg-white transition-colors duration-300 z-50`}>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-20 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <div
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 hover:text-amber-600 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <IoIosCloseCircle className='text-xl' /> // Close icon
            ) : (
              <GiHamburgerMenu className='text-xl' /> // Hamburger icon
            )}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex max-sm:-ml-10 flex-shrink-0 items-center">
            <img
              className="h-16 w-auto"
              src={logoOnly}
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center h-16 space-x-4">
              {navigation.map((item, index) => (
                <Link to={item.href} key={index}>
                  <div
                      onClick={()=> handleNavigationClick()}
                      className={classNames(
                      item.current ? 'border-b border-amber-600' : 'hover:text-amber-700',
                      `px-3 py-2 text-sm font-light max-md:text-black ${textBlack}`,
                      )}>
                      {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/location" onClick={()=> handleNavigationClick()}>
                <CiLocationOn className={`text-2xl max-md:text-black hover:text-amber-700 cursor-pointer ${textBlack}`} />
            </Link>
            {!checkUser ? (
                <>
                    <div onClick={linkToCart}>
                        <IoBagHandleOutline className={`text-2xl max-md:text-black hover:text-amber-700 cursor-pointer ${textBlack}`} />
                    </div>
                    <Link to="/signin">
                        <button
                        onClick={()=> handleNavigationClick()}
                        className={`text-sm font-light max-md:text-black max-md:border-black hover:bg-amber-700
                        hover:border-transparent hover:text-white
                         border ${borderBlack} rounded-full
                        px-3 py-1 ${textBlack}`}>Sign In</button>
                    </Link>
                </>

            ) : (
                <>
                    <Link to="/cart" onClick={()=> handleNavigationClick()}>
                        <IoBagHandleOutline className={`text-2xl max-md:text-black hover:text-amber-700 cursor-pointer ${textBlack}`} />
                    </Link>
                    <div className="relative">
                        <div
                        onClick={()=>setDropdownOpen(!dropdownOpen)}
                        className="flex rounded-full text-sm focus:outline-none focus:ring-2 cursor-pointer"
                        >
                        <span className="sr-only">Open user menu</span>
                        <IoIosArrowDropdown className={`text-2xl max-md:text-black hover:text-amber-700 ${textBlack}`} />
                        </div>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Link to="#" className="block px-4 py-2 text-sm text- text-gray-700 hover:bg-gray-100">Profile</Link>
                                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Change Password</Link>
                                    <Link to="/signin" onClick={()=>handleLogOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log Out</Link>
                                </div>
                        </div>)}
                    </div>
                    </>)}
        </div>
      </div>
    </div>

    {mobileMenuOpen && (
      <div className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item, index) => (
            <Link to={item.href} key={index}>
              <div
                  className={classNames(
                  item.current ? 'border-b border-amber-600' : 'hover:text-amber-600',
                  'px-3 py-2 text-sm font-light',
                  )}>
                      {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);
}

export default Navbar;
