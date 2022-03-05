import React from 'react';

const list = [
  {
    title: 'tailblokcs（レイアウト集）',
    link: 'https://mertjf.github.io/tailblocks/',
  },
  {
    title: 'Template',
    link: 'https://tailwindtemplates.io',
  },
  {
    title: 'スターターキット',
    link: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation',
  },
  {
    title: 'TrailwindUI(一部無料)',
    link: 'https://tailwindui.com/components',
  },
];

const Section03_07 = () => {
  return (
    <>
      <ul className='mt-4'>
        {list.map((item, index) => {
          return (
            <li key={index} className='md:flex w-11/12 mx-auto'>
              <div className='flex-grow w-1/12 text-gray-500'>
                ・{item.title}
              </div>
              <div className='flex-grow w-1/2'>
                <a
                  className='underline text-gray-500'
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  {item.link}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Section03_07;
