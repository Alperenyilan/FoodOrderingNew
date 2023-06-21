import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className='bg-secondary text-white'>
      <div className='container mx-auto pt-16 pb-6'>
        <div className='flex justify-between text-center'>
          <div className='md:flex-1'>
            <Title addClass='text-[30px]'>Contact us</Title>
            <div className='flex flex-col gap-y-4 mt-6'>
              <div>
                <i className='fa fa-map-marker'></i>
                <span className='inline-block ml-2'>Location</span>
              </div>
              <div>
                <i className='fa fa-phone'></i>
                <span className='inline-block ml-2'>
                  Call +90 53567132323232
                </span>
              </div>
              <div>
                <i className='fa fa-envelope'>
                  <span className='inline-block ml-2'>
                    alperenyln1@gmail.com
                  </span>
                </i>
              </div>
            </div>
          </div>
          <div className='md:flex-1'>
            <Title addClass='text-[30px]'>Feane</Title>
            <p className='mt-3'>
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className='flex items-center justify-center mt-5 gap-x-2'>
              <a
                href=''
                className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full '
              >
                <i className='fa fa-facebook'></i>
              </a>
              <a
                href=''
                className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'
              >
                <i className='fa fa-twitter'></i>
              </a>
              <a
                href=''
                className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'
              >
                <i className='fa fa-linkedin'></i>
              </a>
              <a
                href=''
                className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'
              >
                <i className='fa fa-instagram'></i>
              </a>
              <a
                href=''
                className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'
              >
                <i className='fa fa-pinterest'></i>
              </a>
            </div>
          </div>
          <div className='md:flex-1'>
            <Title addClass='text-[30px]'>Contact us</Title>
            <div className='flex flex-col gap-y-4 mt-6'>
              <div>
                <i className='fa fa-map-marker'></i>
                <span className='inline-block ml-2'>Location</span>
              </div>
              <div>
                <i className='fa fa-phone'></i>
                <span className='inline-block ml-2'>Call +90 535671</span>
              </div>
              <div>
                <i className='fa fa-envelope'>
                  <span className='inline-block ml-2'>
                    alperenyln1@gmail.com
                  </span>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className='text-center mt-10'> 2023 Templates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
