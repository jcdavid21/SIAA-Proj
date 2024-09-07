import React from 'react'
import Navigation from './Navbar.jsx'
import Footer from './Footer.jsx'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../assets/home/slider-1.avif'
import img2 from '../assets/home/slider-2.avif'
import img3 from '../assets/home/slider-3.avif'
import coffeeImg from '../assets/home/coffee.jpg'
import foodImg from '../assets/home/food.jpg'
import pasta from '../assets/home/pasta.avif'
import banner1 from '../assets/home/banner-1.avif'
import banner2 from '../assets/home/banner-2.avif'
import poster1 from '../assets/home/poster-1.jpg'
import poster2 from '../assets/home/poster-2.jpg'
import poster3 from '../assets/home/poster-3.avif'
import coffeItem1 from '../assets/menus/coffee/coffee-1.png'
import coffeeBean1 from '../assets/menus/coffee/coffee-bean-1.jpg'
import bgLanding from '../assets/home/bg-landing.jpg'
import bgIcedCoffee from '../assets/home/bg-iced-coffee.png'
import { Link } from 'react-router-dom'

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
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
]

const menuImgs = [
    {
        src: coffeeImg,
        title: "Beverages"
    },
    {
        src: foodImg,
        title: "Meal"
    },
    {
        src: pasta,
        title: "Pasta"
    }
]

const menuSlider = [
    [
        { src: coffeItem1, title: "Hot Coffee Latte" },
        { src: coffeItem1, title: "Hot Coffee Latte" },
        { src: coffeItem1, title: "Hot Coffee Latte" },
    ],
    [
        { src: coffeItem1, title: "Hot Coffee Latte" },
        { src: coffeItem1, title: "Hot Coffee Latte" },
        { src: coffeItem1, title: "Hot Coffee Latte" },
    ],
    [
        { src: coffeItem1, title: "Hot Coffee Latte" },
        { src: coffeItem1, title: "Hot Coffee Latte" },
        { src: coffeItem1, title: "Hot Coffee Latte" },
    ]
]

const coffeeBeans = [
    {src: coffeeBean1, name: "Espresso Roast Blend"},
    {src: coffeeBean1, name: "Espresso Roast Blend"},
    {src: coffeeBean1, name: "Espresso Roast Blend"},
    {src: coffeeBean1, name: "Espresso Roast Blend"},
    {src: coffeeBean1, name: "Espresso Roast Blend"},
    {src: coffeeBean1, name: "Espresso Roast Blend"}
]

const posterDisplay = [
	{
		src: poster1,
		clastyle: "flex-row",
		title: "Brewed Comfort",
		text: "Enjoy the comforting warmth of our expertly brewed coffee, designed to make every day a little cozier."
	},
	{
		src: poster3,
		clastyle: "flex-row-reverse",
		title: "Pure Indulgence",
		text: "Treat yourself to pure indulgence with our premium coffee and delicious pastries. Perfect moments are brewed here."
	},
	{
		src: poster2,
		clastyle: "flex-row",
		title: "Warm Welcome",
		text: "Enjoy a warm welcome at our café where friendly service and exceptional coffee come together to make you feel at home."
	}
]

function Home() {
    return (
        <div className='overflow-hidden'>
            <Navigation />
            <div className='img-con-slider relative max-md:mt-20 flex items-center justify-center'>
                <div className='img-con'>
                    <img className='h-full object-cover object-left' src={bgLanding} alt="" />
                </div>
                <div className="absolute right-2">
                    <img className='h-96 w-full animate-float
                    max-md:h-36' src={bgIcedCoffee} alt="" />
                </div>
                <div className='absolute flex items-center flex-col gap-4 text-white text-center'>
                    <div className='text-5xl font-semibold max-md:text-2xl'>
                        {sliderContent[0].title}
                    </div>
                    <div className='max-w-xl text-lg font-light tracking-wider
                    max-md:text-xs max-md:max-w-80'>
                        {sliderContent[0].caption}
                    </div>
                    <Link to="/menu">
                        <button className='border hover:bg-amber-800
                            hover:border-transparent
                            max-md:text-xs max-md:py-2 max-md:px-4 
                            hover:bg-opacity-50 px-6 py-2 font-semibold tracking-wider
                            text-lg rounded-md
                            w-max'>Order Now
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center my-16 px-4">
                <div className='max-w-5xl w-full'>
                    <div className='text-center mb-6 text-amber-900 text-2xl font-medium'>Yakal's Menu</div>
                    <div className="h-80 flex flex-wrap gap-4 max-md:flex-col max-md:items-center">
                        {menuImgs.map((menu, index) => {
                            const { src, title } = menu;
                            return (
                                <div className="flex-1 relative h-full rounded-sm overflow-hidden w-full" key={index}>
                                    <img className='h-full object-cover object-center brightness-75' src={src} alt={title} />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-600 bg-opacity-30">
                                        <button className="text-white text-xl border border-white 
                                        font-medium tracking-wider px-6 py-2 
                                        rounded-md hover:border-transparent
                                        w-40 max-md:text-lg
                                         hover:bg-amber-800 hover:bg-opacity-50">{title}</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="w-full bg-slate-50 bg-opacity-50 py-12 px-12">
                <div className=" text-center flex flex-col items-center gap-2 mb-12 text-amber-700">
                    <div className=' text-xl font-medium'>A Full Taste Experience</div>
                    <div className='w-3/5 font-extralight text-sm
                    max-md:w-full max-md:text-xs'>
                        "At our café, we serve more than just your favorite coffee. Enjoy a delightful 
                        array of pasta dishes and hearty meals, all crafted with the finest ingredients."
                    </div>
                </div>
                <Slider {...settings}>
                    {menuSlider.map((row, rowIndex)=>(
                        <div className="!flex flex-row justify-center space-x-4" key={rowIndex}>
                            {
                                row.map((item, itemIndex)=>{
                                    const {src, title} = item
                                    return(
                                        <div className="flex flex-col items-center" key={itemIndex}>
                                            <img className="h-52 w-auto object-contain" src={src} alt="Coffee Item 1" />
                                            <div className="text-amber-700 font-light mt-2
                                            max-md:text-sm">{title}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='flex items-center justify-center px-6 py-4'>
                <div className='grid grid-cols-4 gap-6 max-w-6xl w-full max-md:flex max-md:overflow-x-auto'>
                    {coffeeBeans.map((item, index) => {
                        const { src, name } = item;
                        return (
                        <div key={index} className='relative w-full max-md:w-auto flex-shrink-0 overflow-hidden'>
                            <div className='h-56 cursor-pointer hover:scale-125 transition-transform duration-300 overflow-hidden relative z-10'>
                                <img className='h-full object-contain' src={src} alt="" />
                            </div>
                            <div className='mt-2 z-20 max-md:text-sm text-center text-amber-700 bg-white relative'>
                                {name}
                            </div>
                        </div>
                        );
                    })}
                </div>

            </div>




            <div className='h-80 max-md:h-52 relative flex items-center justify-center border-b border-b-amber-800'>
                <img className='h-full object-cover object-center brightness-50' src={banner1} alt="" />
                <div className='absolute text-white text-center'>
                    <div className="font-light text-3xl tracking-wider max-md:text-xl">Learn more about us</div>
                    <Link to="/about">
                        <button className='border border-white px-7 py-1 rounded-md
                        font-medium tracking-wider mt-2
                        hover:bg-amber-800 hover:bg-opacity-50 hover:border-transparent
                        max-md:text-sm'>About</button>
                    </Link>
                </div>
            </div>
            <div className='h-80 max-md:h-52 relative flex items-center justify-center border-b border-b-amber-800'>
                <img className='h-full object-cover object-center brightness-50' src={banner2} alt="" />
                <div className='absolute text-white text-center'>
                    <div className="font-light text-3xl tracking-wider
                    max-md:text-lg px-12">Refine your coffee experience here at Yakal's Cafe</div>
                </div>
            </div>
            
			{posterDisplay.map((poster, index)=>{
				const {src, clastyle, title, text} = poster
				return(
					<div className={`flex ${clastyle} items-center justify-center`} key={index}>
						<div className='flex-1 h-96 max-md:hidden'>
							<img className='h-full object-cover object-center' src={src} alt="" />
						</div>
						<div className='flex-1 max-md:border-b max-md:border-b-black'>
							<div className='px-28 py-6 text-center max-lg:px-12'>
								<div className='mb-4 text-3xl max-lg:text-xl font-medium text-amber-800'>{title}</div>
								<div className='text-lg  max-lg:text-base
								 font-light tracking-wide
								leading-8 max-md:font-extralight'>{text}</div>
							</div>
						</div>
					</div>
				)
			})}
			<Footer />
        </div>
    );
}

export default Home