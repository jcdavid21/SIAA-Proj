import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import vid from '../assets/about/vid.mp4';
import imgAbout1 from '../assets/about/about-img-1.avif';
import imgAbout2 from '../assets/about/about-img-2.avif';
import imgAbout3 from '../assets/about/about-img-3.avif';
import imgAbout4 from '../assets/about/about-img-4.avif';
import imgAbout5 from '../assets/about/about-img-5.avif';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/home/slider-1.avif';
import img2 from '../assets/home/slider-2.avif';
import img3 from '../assets/home/slider-3.avif';

function About() {
  const location = useLocation(); // Get the current location

  const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, 
};

const sliderContent = [
    {
      src: img1,
      title: "Quality Coffee",
      caption: "Every cup is crafted with precision and passion, delivering a perfect brew that satisfies your coffee cravings"
    },
    {
      src: img2,
      title: "Pure Coffee Bliss",
      caption: "Escape into a world of pure coffee bliss, where every sip is a moment of indulgence and pleasure."
    },
    {
      src: img3,
      title: "Taste The Difference",
      caption: "From the first sip, you’ll taste the difference in our coffee, crafted with care and a commitment to quality."
    }
  ];  

const styleImg = "h-full hover:scale-110 transition-transform duration-500 object-cover object-center";

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]); // Add location to the dependency array

  return (
    <div className='overflow-hidden'>
      <Navigation />
      <div className='w-full max-w-full max-sm:mt-16'>
        <Slider {...settings}>
          {sliderContent.map((slider, index) => {
            const { src, title, caption } = slider;
            return (
              <div key={index} className='img-con-slider relative flex items-center justify-center'>
                <div className="img-con"> {/* Adjust the height as needed */}
                  <img src={src} className="h-full object-cover object-center brightness-50" alt={`Slide ${index}`} />
                </div>
                <div className="absolute top-0 text-white left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className='flex items-center flex-col text-center'>
                    <div className='text-5xl font-medium max-md:text-2xl'>{title}</div>
                    <div className='banner-cap my-5 italic font-light max-md:my-2 max-md:w-96 
                    max-md:text-xs'>{caption}</div>
                    <Link to="/menu">
                      <button className='border hover:bg-amber-700
                      hover:border-transparent
                      max-md:text-xs max-md:py-2 max-md:px-4 
                      hover:bg-opacity-50 px-6 py-2 font-semibold tracking-wider
                      text-lg rounded-md'>Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='flex items-center flex-shrink-0 justify-center
      border-b border-b-black max-md:flex-col' style={{marginTop: "-6px"}}>
        <div className='flex-1'>
          <div className='px-24 max-md:px-4 max-md:py-6'>
            <div className='text-xs tracking-widest text-amber-700'>ABOUT US</div>
            <div className='text-3xl py-2 font-medium max-md:text-xl'>Warm Welcome</div>
            <hr className='w-16 border border-amber-700' />
            <div className='flex gap-4 flex-col mt-4 font-light leading-7 max-md:text-sm max-md:font-extralight
          '>
              <div>
                At the heart of our café is a passion for coffee and community.
                Every day, we strive to create a welcoming space where 
                everyone can enjoy a moment of comfort, connection, and joy.
              </div> 

              <div>
                Our commitment to quality, from our carefully sourced beans to our handcrafted brews, 
                is all about making your day a little brighter.
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <video src={vid} autoPlay loop muted></video>
        </div>
      </div>

      <div className='flex items-center justify-center text-center py-20 max-md:py-6'>
        <div className='text-center w-3/5 max-md:w-full max-md:px-4 max-md:text-start
         flex items-center flex-col gap-3 justify-center max-md:items-start'>
          <div className='text-3xl font-medium max-md:text-xl'>Pure Indulgence</div>
          <hr className='w-16 border border-amber-700' />
          <div className='font-light leading-7 max-md:text-sm max-md:font-extralight'>
            We believe that every cup of coffee should be more than just a drink—it should be an experience. "Pure Indulgence" is our promise to you.
            From the first sip to the last, you'll be tasting aromatic blends and handcrafted perfection.
            <span className='block mt-3'>
              Whether you're savoring a perfectly brewed espresso or treating yourself to one of our decadent pastries, each moment here is designed to be a luxurious escape.
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-shrink-0 overflow-hidden h-96'>
        <div className='flex-1 border-r border-r-white overflow-hidden max-md:hidden'>
          <img className={`${styleImg}`} src={imgAbout1} alt="" />
        </div>
        <div className='flex-1'>
          <div className='flex h-36 border-b border-b-white'>
            <div className='flex-1 border-r border-r-white overflow-hidden'>
              <img className={`${styleImg}`} src={imgAbout2} alt="" />
            </div>
            <div className='flex-1 overflow-hidden'>
              <img className={`${styleImg}`} src={imgAbout3} alt="" />
            </div>
          </div>
          <div className='overflow-hidden h-60'>
            <img className={`${styleImg}`} src={imgAbout4} alt="" />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center text-center py-20 max-md:py-6'>
        <div className='text-center w-3/5 flex items-center flex-col gap-3 justify-center 
        max-md:w-full max-md:px-4 max-md:text-start max-md:items-start'>
          <div className='text-3xl font-medium max-md:text-xl'>Café Serenity</div>
          <hr className='w-16 border border-amber-700' />
          <div className='font-light leading-7 max-md:text-sm max-md:font-extralight'>
            We are passionate about creating a peaceful escape from the everyday hustle. 
            Our mission is to provide a sanctuary where you can enjoy top-quality coffee and a warm, 
            welcoming environment.
            <span className='block mt-3'>
              We meticulously select the finest beans and employ expert techniques to deliver a cup that embodies the true essence of quality and care.
            </span>
          </div>
        </div>
      </div>

      <div className='flex items-center flex-shrink-0 justify-center
      border-t border-t-black h-96 max-md:flex-col max-md:h-max'>
        <div className='flex-1 h-full max-md:h-52'>
          <img className='object-cover object-center h-full' src={imgAbout5} alt="" />
        </div>
        <div className='flex-1'>
          <div className='px-24 max-md:px-4 max-md:py-6'>
            <div className='text-xs tracking-widest text-amber-700'>ABOUT US</div>
            <div className='text-3xl py-2 font-medium max-md:text-xl'>Our Mission</div>
            <hr className='w-16 border border-amber-700' />
            <div className='flex gap-4 flex-col mt-4 font-light max-md:text-sm max-md:font-extralight'>
              <div>
                We aim to provide a warm, inviting environment where you can enjoy great coffee and attentive service.
              </div> 

              <div>
                We are committed to sustainable practices that support the environment and our community.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
