import React from 'react'
import logoOnly from '../assets/logo-w-name.png';
import Navigation from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom';

function SignIn() {

    const handleNavigationClick = ()=>{
        window.scroll(0, 0)
    }
    
  return (
    <div>
        <Navigation />
        <div className='h-svh flex bg-gray-100 items-center justify-center p-6'>
            <div className='px-6 pb-8 py-4 border max-w-lg w-full border-gray-200 rounded-md bg-white shadow-sm'>
                <div className='h-20 mb-6 mt-2 flex justify-center'>
                    <img  className='object-contain h-full' src={logoOnly} alt="" />
                </div>
                <div className='text-xl font-medium text-amber-800 pb-1'>Sign in</div>
                <hr className='mb-4 w-28 border border-amber-800' />
                <form action="">
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-sm font-light'>Your email<span className='text-red-700'>*</span></label>
                        <input className='w-full border border-gray-400 rounded-md text-sm
                         p-2 py-3 mt-1' type="email" placeholder='Input your email...' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='text-sm font-light'>Password<span className='text-red-700'>*</span></label>
                        <input className='w-full border border-gray-400 rounded-md text-sm
                         p-2 py-3 mt-1' type="password" placeholder='Input your password...' />
                    </div>

                    <div className='flex text-sm justify-between gap-6'>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <div>Rember me</div>
                        </div>

                        <div className='hover:text-amber-700 cursor-pointer'>Forgot Password?</div>
                    </div>

                    <button className='mt-5 w-full font-medium px-4 py-2
                    rounded-md bg-amber-800 text-white hover:bg-opacity-90'>
                        Submit
                    </button>

                    <div className='mt-4 text-sm'>
                        Don't have an account yet? 
                        <Link to='/signup'>
                            <span className='text-amber-700'
                            onClick={()=> handleNavigationClick()}> Sign up</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SignIn   