import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
      <Title addClass='text-[40px]'>Ödeme</Title>
      <div className=' mt-5 p-10 overflow-x-auto w-full'>
        <table className='w-full text-sm text-center text-gray-500 min-w-[1000px]'>
          <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                ID
              </th>
              <th scope='col' className='py-3 px-6'>
                Address
              </th>
              <th scope='col' className='py-3 px-6'>
                Date
              </th>
              <th scope='col' className='py-3 px-6'>
                Total
              </th>
              <th scope='col' className='py-3 px-6'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='transition-all bg-secondary border-gray-700 hover:bg-primary '>
              <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                <span>632107...</span>
              </td>
              <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                <span>Balikesir</span>
              </td>
              <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                01-08-2023
              </td>
              <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                $18
              </td>
              <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                preparing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
