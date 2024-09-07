import React from 'react'
import logoOnly from '../assets/logo-w-name.png';
import Navigation from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom';

function SignUp() {

    const handleNavigationClick = ()=>{
        window.scroll(0, 0)
    }
  return (
    <div>
        <Navigation />
        <div className='h-svh mt-10 flex bg-gray-100 items-center justify-center p-6'>
        <div className='px-6 pb-8 py-4 border max-w-2xl w-full border-gray-200 rounded-md bg-white shadow-lg'>
                <div className='h-20 mb-6 mt-2 flex justify-center'>
                    <img  className='object-contain h-full' src={logoOnly} alt="" />
                </div>
                <div className='text-xl font-medium text-amber-800 pb-1'>Sign up</div>
                <hr className='mb-4 w-28 border border-amber-800' />
                <form action="">
                    <div className='flex gap-5'>
                        <div className='mb-4 flex-1'>
                            <label htmlFor="firstName" className='text-sm font-light'>First name<span className='text-red-700'>*</span></label>
                            <input className='w-full border border-gray-400 rounded-md text-sm
                            p-2 py-3 mt-1' type="text" placeholder='Input your first name...' />
                        </div>
                        <div className='mb-4 flex-1'>
                            <label htmlFor="middleName" className='text-sm font-light'>Middle name</label>
                            <input className='w-full border border-gray-400 rounded-md text-sm
                            p-2 py-3 mt-1' type="text" placeholder='Input your middle name...' />
                        </div>
                    </div>

                    <div className='flex gap-5'>
                        <div className='mb-4 flex-1'>
                            <label htmlFor="lastName" className='text-sm font-light'>Last name<span className='text-red-700'>*</span></label>
                            <input className='w-full border border-gray-400 rounded-md text-sm
                            p-2 py-3 mt-1' type="text" placeholder='Input your last name...' />
                        </div>
                        <div className='mb-4 flex-1'>
                            <label htmlFor="lastName" className='text-sm font-light'>Gender<span className='text-red-700'>*</span></label>
                            <select className='w-full p-2 py-3
                            text-sm rounded-md mt-1 text-gray-600 border border-gray-400' name="gender" id="gender">
                                <option value="" selected disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div> 

                    <div className='mb-4'>
                        <label htmlFor="address" className='text-sm font-light'>Address<span className='text-red-700'>*</span></label>
                        <input className='w-full border border-gray-400 rounded-md text-sm
                         p-2 py-3 mt-1' type="text" placeholder='Input your password...' />
                    </div>

                    
                    <div className='flex gap-5'>
                        <div className='mb-4 flex-1'>
                            <label htmlFor="email" className='text-sm font-light'>Email<span className='text-red-700'>*</span></label>
                            <input className='w-full border border-gray-400 rounded-md text-sm
                            p-2 py-3 mt-1' type="text" placeholder='Input your email...' />
                        </div>
                        <div className='mb-4 flex-1'>
                            <label htmlFor="password" className='text-sm font-light'>Password<span className='text-red-700'>*</span></label>
                            <input className='w-full border border-gray-400 rounded-md text-sm
                            p-2 py-3 mt-1' type="password" placeholder='Input your password...' />
                        </div>
                    </div>

                    <button className='mt-5 w-full font-medium px-4 py-2
                    rounded-md bg-amber-800 text-white hover:bg-opacity-90'>
                        Submit
                    </button>

                    <div className='mt-4 text-sm'>
                        Already have an account?
                        <Link to='/signin'>
                            <span className='text-amber-700'
                            onClick={()=>handleNavigationClick()}> Log in</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SignUp