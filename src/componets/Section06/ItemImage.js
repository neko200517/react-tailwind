import React from 'react';

const ItemImage = (props) => {
  const { src, name, category, price } = props.item;
  return (
    <>
      <div className='lg:w-1/3 md:w-1/2 p-4 w-full'>
        <div className='border p-2'>
          <a className='block relative h-56 md:h-48 rounded overflow-hidden'>
            <img
              alt='ecommerce'
              className='object-cover object-center w-full h-full block'
              src={src}
            />
          </a>
          <div className='mt-4'>
            <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
              {category}
            </h3>
            <h2 className='text-gray-900 title-font text-lg font-medium'>
              {name}
            </h2>
            <p className='mt-1'>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemImage;
