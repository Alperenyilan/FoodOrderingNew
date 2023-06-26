import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className='min-h-[calc(100vh_-_433px)]'>
      <div className='flex justify-between items-center'>
        <div className='min-h-[calc(100vh_-_433px)] flex items-center flex-1'>
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantitiy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src='/images/f1.png' alt='' width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td>
                  <span>mayonez,acısos,ketçap</span>
                </td>
                <td>20$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12'>
          <Title addClass='text-[40px]'>CART TOTAL</Title>
          <div className='mt-6'>
            <span>Subtotal: $20</span>
            <span className=' inline-block my-1'>Discount: $0</span>
            <span>Total: $20</span>
          </div>
          <button className='btn-primary mt-4'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
