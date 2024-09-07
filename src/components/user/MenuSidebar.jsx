import React from 'react';

function MenuSidebar({ activeSidebar, setActiveSidebar, floatSidebar }) { // Receive props
  const coffees = [
    { name: "Hot Coffees", id: 1 },
    { name: "Cold Coffees", id: 2 },
    { name: "Frappucino Blended", id: 3 }
  ];

  const foods = [
    { name: "Hot Breakfast", id: 4 },
    { name: "Pastry", id: 5 },
  ];

  return (
    <div>
      <div className='max-lg:hidden'>
        <div className='mb-2 text-lg font-medium'>Drinks</div>
        <div className='leading-10 text-gray-600'>
          {coffees.map((item, itemIndex) => {
            const { name, id } = item;
            return (
              <div key={itemIndex}
                onClick={() => setActiveSidebar(id)}
                defaultValue={id}
                className={`hover:text-amber-700 cursor-pointer 
                ${activeSidebar === id ? 'border-b border-b-amber-700' : ''}`}>
                {name}
              </div>
            );
          })}
        </div>

        <div className='mt-4 mb-2 text-lg font-medium'>Foods</div>
        <div className='leading-10 text-gray-600'>
          {foods.map((item, itemIndex) => {
            const { name, id } = item;
            return (
              <div key={itemIndex}
                onClick={() => setActiveSidebar(id)}
                defaultValue={id}
                className={`hover:text-amber-700 cursor-pointer
                ${activeSidebar === id ? 'border-b border-b-amber-700' : ''}`}>
                {name}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${floatSidebar ? "max-lg:-left-full" : "max-lg:left-0"} fixed -left-full top-36 bottom-0
      py-4 px-4 w-48 z-10 bg-white border-r border-r-gray-300`}>
        <div className='mb-2 text-lg font-medium'>Drinks</div>
        <div className='text-gray-600 text-sm flex flex-col gap-3'>
          {coffees.map((item, itemIndex) => {
            const { name, id } = item;
            return (
              <div key={itemIndex}
                onClick={() => setActiveSidebar(id)}
                defaultValue={id}
                className={`hover:text-amber-700 cursor-pointer 
                ${activeSidebar === id ? 'border-b border-b-amber-700' : ''}`}>
                {name}
              </div>
            );
          })}
        </div>

        <div className='mt-4 mb-2 text-lg font-medium'>Foods</div>
        <div className=' text-gray-600 text-sm flex flex-col gap-3'>
          {foods.map((item, itemIndex) => {
            const { name, id } = item;
            return (
              <div key={itemIndex}
                onClick={() => setActiveSidebar(id)}
                defaultValue={id}
                className={`hover:text-amber-700 cursor-pointer
                ${activeSidebar === id ? 'border-b border-b-amber-700' : ''}`}>
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
