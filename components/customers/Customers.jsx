import React from "react";
import Title from "../ui/Title";
import CustomersItem from "./CustomersItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className='absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white'
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className='absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2'
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    //* dış taraf için genel bi container olusturduk */
    <div className='container mx-auto mb-20 mt-12'>
      <Title addClass='text-[40px] text-center'>What says Our customers</Title>

      <Slider {...settings}>
        <CustomersItem imgSrc='/images/client1.jpg' />
        <CustomersItem imgSrc='/images/client1.jpg' />
        <CustomersItem imgSrc='/images/client1.jpg' />
        <CustomersItem imgSrc='/images/client2.jpg' />
      </Slider>
    </div>
  );
};

export default Customers;
