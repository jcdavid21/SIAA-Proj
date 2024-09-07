import React, { useState, useEffect } from 'react';
import Navigation from './Navbar.jsx';
import Footer from './Footer.jsx';
import Sidebar from './MenuSidebar.jsx';
import { FaArrowRight } from "react-icons/fa";

function Menu() {
  const [activeTab, setActiveTab] = useState('Menu');
  const [activeSidebar, setActiveSidebar] = useState(1);
  const [title, setTitle] = useState('');
  const [floatSidebar, setFloatSidebar] = useState(true);

  const items = [
    { name: "Pumpkin Spice", title: "Frappcuino Blended", id: 1, type: 3, href: "frappe/frappe-1.avif" },
    { name: "Apple Crisp", title: "Frappcuino Blended", id: 2, type: 3, href: "frappe/frappe-2.avif" },
    { name: "Mocha Cookie", title: "Frappcuino Blended", id: 3, type: 3, href: "frappe/frappe-3.avif" },
    { name: "Caramel Ribbon", title: "Frappcuino Blended", id: 4, type: 3, href: "frappe/frappe-4.avif" },

    { name: "Pumpkin Spice", title: "Frappcuino Blended", id: 5, type: 3, href: "frappe/frappe-1.avif" },
    { name: "Apple Crisp", title: "Frappcuino Blended", id: 6, type: 3, href: "frappe/frappe-2.avif" },
    { name: "Mocha Cookie", title: "Frappcuino Blended", id: 7, type: 3, href: "frappe/frappe-3.avif" },
    { name: "Caramel Ribbon", title: "Frappcuino Blended", id: 8, type: 3, href: "frappe/frappe-4.avif" },

    { name: "Pumpkin Cream Cold Brew", title: "Cold Coffee", id: 9, type: 2, href: "iced-coffee/cold-coffee-1.avif" },
    { name: "Salted Caramel Cream Cold Brew", title: "Cold Coffee", id: 10, type: 2, href: "iced-coffee/cold-coffee-2.avif" },
    { name: "Chocolate Cream Cold Brew", title: "Cold Coffee", id: 11, type: 2, href: "iced-coffee/cold-coffee-3.avif" },
    { name: "Cold Brew Coffee", title: "Cold Coffee", id: 12, type: 2, href: "iced-coffee/cold-coffee-4.avif" },

    { name: "Pumpkin Cream Cold Brew", title: "Cold Coffee", id: 13, type: 2, href: "iced-coffee/cold-coffee-1.avif" },
    { name: "Salted Caramel Cream Cold Brew", title: "Cold Coffee", id: 14, type: 2, href: "iced-coffee/cold-coffee-2.avif" },
    { name: "Chocolate Cream Cold Brew", title: "Cold Coffee", id: 15, type: 2, href: "iced-coffee/cold-coffee-3.avif" },
    { name: "Cold Brew Coffee", title: "Cold Coffee", id: 16, type: 2, href: "iced-coffee/cold-coffee-4.avif" }
  ];

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const filterItems = items.filter((row) => row.type === activeSidebar);
    if(filterItems.length > 0){
      setTitle(filterItems[0].title);
    }else{
      setTitle('')
    }
    setFilteredItems(filterItems);
  }, [activeSidebar]);

  const handleFilter = (value) => {
    const filteredItems = items.filter((row) => {
      return row.name.toLowerCase().includes(value.toLowerCase()) && row.type === activeSidebar;
    });
    setFilteredItems(filteredItems);
  };
  

  return (
    <div>
      <Navigation />
      <div className='mt-20 py-4 bg-gray-100 flex items-center justify-center border-b border-b-gray-300'>
        <div className='flex justify-between items-center max-w-7xl w-full px-6'>
          <div className='flex font-light gap-3 text-sm text-gray-600'>
            <div className='flex items-center gap-2'>
              <div className='text-base hidden max-lg:block cursor-pointer'
              onClick={()=>setFloatSidebar(!floatSidebar)}>
                <FaArrowRight />
              </div>
              <div
                className={`cursor-pointer ${activeTab === 'Menu' ? 'border-b border-gray-700' : ''} pb-1`}
                onClick={() => setActiveTab('Menu')}
              >
                Menu
              </div>
            </div>
            <div
              className={`cursor-pointer ${activeTab === 'Favorites' ? 'border-b border-gray-700' : ''}`}
              onClick={() => setActiveTab('Favorites')}
            >
              Favorites
            </div>
          </div>
          <div>
            <input className='w-52 border border-gray-400 py-1 px-2 text-sm rounded-full' 
            type="text" placeholder='Search...'
            onChange={(e)=>handleFilter(e.target.value)} />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mb-32'>
        <div className='flex gap-10 max-w-7xl p-6 w-full max-md:block'>
          <Sidebar 
            activeSidebar={activeSidebar} 
            setActiveSidebar={setActiveSidebar}
            floatSidebar={floatSidebar}
          />
          <div className='flex-1'>
            <div className='mb-10 text-2xl font-semibold pb-2
            border-b border-b-gray-400'>{title}</div>
            <div className='grid grid-cols-4 gap-6 gap-y-10 max-sm:grid-cols-2 max-md:grid-cols-3'>
              {filteredItems.map((item, itemIndex) => {
                const { name, id, type, href } = item;
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col items-center gap-4' id={id} data-type={type}>
                    <div className='h-40 w-40 max-md:h-28 max-md:w-28 rounded-full overflow-hidden'>
                      <img className='h-full w-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300'
                        src={require(`../assets/menus/${href}`)} 
                        alt={name} />
                    </div>
                    <div className='font-medium text-amber-800 text-center px-8 max-md:text-sm'>
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
