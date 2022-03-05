import React from 'react';

const Table = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container md:px-5 py-4 mx-auto'>
          <div className='w-full mx-auto overflow-auto'>
            <table className='table-auto w-full text-left whitespace-no-wrap'>
              <thead>
                <tr>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
                    Plan
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Speed
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Storage
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Price
                  </th>
                  <th className='w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-3'>Start</td>
                  <td className='px-4 py-3'>5 Mb/s</td>
                  <td className='px-4 py-3'>15 GB</td>
                  <td className='px-4 py-3 text-lg text-gray-900'>Free</td>
                  <td className='w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
                <tr>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>Pro</td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    25 Mb/s
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    25 GB
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900'>
                    $24
                  </td>
                  <td className='border-t-2 border-gray-200 w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
                <tr>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    Business
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    36 Mb/s
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3'>
                    40 GB
                  </td>
                  <td className='border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900'>
                    $50
                  </td>
                  <td className='border-t-2 border-gray-200 w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
                <tr>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3'>
                    Exclusive
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3'>
                    48 Mb/s
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3'>
                    120 GB
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900'>
                    $72
                  </td>
                  <td className='border-t-2 border-b-2 border-gray-200 w-10 text-center'>
                    <input name='plan' type='radio' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
