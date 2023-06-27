import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className='min-h-[calc(100vh_-_433px)]'>
      <div className='flex justify-between items-center  md:flex-row flex-col'>
        <div className='min-h-[calc(100vh_-_433px)] flex items-center flex-1  p-10 overflow-x-auto w-full'>
          <table className='w-full text-sm text-center text-gray-500 min-w-[1000px]'>
            <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  PRODUCT
                </th>
                <th scope='col' className='py-3 px-6'>
                  Extras
                </th>
                <th scope='col' className='py-3 px-6'>
                  Price
                </th>
                <th scope='col' className='py-3 px-6'>
                  Quantitiy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='transition-all bg-secondary border-gray-700 hover:bg-primary '>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                  <Image src='/images/f1.png' alt='' width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  <span>mayonez,acısos,ketçap</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  20$
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12  md:w-auto w-full   md:text-start !text-center'>
          <Title addClass='text-[40px]'>CART TOTAL</Title>
          <div className='mt-6 flex flex-col'>
            <span>Subtotal: $20</span>
            <span className=' inline-block my-1'>Discount: $0</span>
            <span>Total: $20</span>
          </div>
          <button className='btn-primary mt-4 md:w-auto w-52'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;