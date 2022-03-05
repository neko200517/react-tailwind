import React from 'react';
import ItemImage from './ItemImage';

const list = [
  {
    src: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
  },
  {
    src: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
  },
  {
    src: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
  },
  {
    src: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    name: 'The Catalyzer',
    price: '$16.00',
  },
];

const ItemIndex = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-4 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {list.map((item, index) => (
              <ItemImage key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemIndex;
