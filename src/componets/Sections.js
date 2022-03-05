import React from 'react';
import { Link } from 'react-router-dom';

const Sections = (props) => {
  const { title, list } = props;
  return (
    <ul className=''>
      <h3 className='font-bold uppercase text-white mb-2'>{title}</h3>
      {list.map((item, index) => {
        return (
          <li
            key={index}
            className='transition duration-200 hover:scale-110 ease-out text-gray-400 hover:text-gray-200 hover:underline py-1 pr-4 mr-2 text-sm'
          >
            <Link to={item.to}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sections;
