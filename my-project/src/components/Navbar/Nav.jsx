// icon imports
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import { Button, Layout, theme } from 'antd';



const options = ['Nigeria', 'Japan', 'Denmark', 'Algeria', 'Germany', 'China', 'London', 'Spain', 'Norway'];


const { Header } = Layout


const Nav = (collapsed, setCollapsed) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [profileSelect, setProfileSelect] = useState(false)
  const [color, setColor] = useState(false)
  const [searchClick, setSearchClick] = useState(false)
  const [downClick, setDownClick] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: {colorBgContainer},
  } = theme.useToken();
  
  const FocusInput = useRef()

  const profileClick = () => {

    setProfileSelect(!profileSelect)
    setColor(!color)

  }
  const ClickBoxs1 = () => {
    setDownClick(!downClick)
  }
  const ChangeDireaction = downClick ? 'rotate-90' : 'rotate-0';

  // Function to toggle the dropdown menu
  const toggling = () => setIsOpen(!isOpen);
  const backgroundColor = color ? 'bg-[#fff] text-gray-500' : 'bg-[#fc8e32]';
  // Function to handle option click
  const onOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const searchRequest = () => {
    setSearchClick(!searchClick)
    FocusInput.current.focus()
  }



  return (
    <div>
      {/* Header Navbar */}
      <header className="flex items-center p-[.9rem] bg-[#fc8019] gap-3 lg:gap-12 text-[#fff] w-[100%] sticky z-40">
        {/* Head Logo */}
        <a href="#" className="flex text-[1.4rem] gap-1">
          {/* Logo */}
          <span>
            <img src="../../../public/logo.png" alt="" />
          </span>
          {/* Logo Text */}
          <span className="pt-[3px] font-bold text-[1.5rem] lg:block hidden"><a href="#">FoodDesk.</a></span>
        </a>
        {/* Head Logo End */}

        <div className="flex flex-row gap-[2.4rem]">

          {/* Menu Icon */}
          <Header style={{background: colorBgContainer}}>
          <Button 
            type="primary"
            onClick={toggleCollapsed}
            className="icon text-[#fff]  lg:block md:hidden h-[2.9rem] block pt-2 text-[2.1rem] cursor-pointer font-extrabold">
            {/* <HiOutlineMenuAlt2 /> */}
            {collapsed ? <HiOutlineMenuAlt2 /> : <HiOutlineMenuAlt3 />}

          </Button>
          </Header>
        
    
          {/* menu icon end */}


          {/* Navbar Search and Profile */}
          <div className="main flex gap-[1rem] font-serif">


            {/* Search Container */}
            <div className="hidden sm:block relative ">
              <div className="search relative border-solid flex gap-[1rem] border-[1px] rounded-md border-[#fd9c4b] bg-[#fc8e32] py-[.7rem] px-[1.5rem]">
                {/* Selection Start */}
                <div
                  className="h-[3.5vh] w-[11vw]   bg-[rgb(252,128,25,.2)] pr-8 border-solid border-white outline-none cursor-pointer flex items-center gap-2 p-2"
                  onClick={toggling}
                >
                  <div className=""><FaLocationDot className="text-[.9rem]  text-white" /></div>
                  {selectedOption || 'Nigeria'}
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className=" inline-flex h-full item-center justify-center rounded-t-md border-1 border-gray-10  px-3 text-white"
                    onClick={toggling}
                  >
                    <FaAngleDown />
                  </button>
                </div>
                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="main absolute top-[3rem] left-[.1rem] shadow-lg z-10 mt-4 origin-top-right text-black rounded-sm border-none bg-white">
                    {/* Dropdown Options */}
                    {options.map((option) => (
                      <div key={Math.floor(Math.random() * 1000)} className="w-[230px] text-gray-400 hover:text-orange-500 hover:bg-orange-100">
                        <button
                          type="button"
                          key={Math.floor(Math.random() * 1000)}
                          onClick={() => onOptionClick(option)}
                          className="rounded-md flex gap-3 items-center px-4 py-[.6rem] text-sm "
                        >
                          <FaLocationDot className="text-[12px] " /> {option}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {/* Selection End */}
                {/* Search Input */}
                <div className="relative flex ">
                  <span className="text-white absolute left-5 top-1 cursor-pointer" onClick={searchRequest} > <BsSearch /></span>
                  <input
                    type="text"
                    placeholder="What do you want to eat today"
                    ref={FocusInput}
                    className="outline-none md:text-sm lg:text-md border-l-2 border-white pl-12  placeholder:text-white md:w-[28vw] w-[4vw]  h-[3.5vh] bg-transparent "
                  />

                </div>
                {/* Search End */}
              </div>
              {searchClick && ( <div  className="absolute w-[47.9vw]">
                <div className="p-4 shadow-lg bg-white flex flex-col">
                  <div className=" flex flex-col gap-2  px-[.8rem] ">
                    <h3 className="text-gray-800 font-medium">Recently Searched</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <div className="border-[1px] py-3 px-5 border-gray-300 rounded-full  cursor-pointer hover:bg-gray-200 ">Bakery</div>
                      <div className="border-[1px] py-3 px-5 border-gray-300 rounded-full  cursor-pointer hover:bg-gray-200">Burger</div>
                      <div className="border-[1px] py-3 px-5 border-gray-300 rounded-full  cursor-pointer hover:bg-gray-200">Beverage</div>
                      <div className="border-[1px] py-3 px-5 border-gray-300 rounded-full  cursor-pointer hover:bg-gray-200">Chicken</div>
                      <div className="border-[1px] py-3 px-5 border-gray-300 rounded-full  cursor-pointer hover:bg-gray-200">Pizza</div>
                    </div>
                  </div>
                  {/* scroll bar */}
                  <div className="pt-[1rem] px-[1rem]">
                    <h1 className="text-gray-500 text-lg pb-[.5rem]">popular Cuisines</h1>
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper "
                    >
                      <SwiperSlide className="text-black flex flex-col gap-2 text-center justify-center rounded-md border-[1px] border-gray-400 px-4 py-3">
                        <img src="../../../public/pic-1.jpg" className="w-[80%] relative left-[.7rem] " alt="" />
                        <span className="text-gray-700 text-sm">Fish Burger</span>
                      </SwiperSlide>
                      <SwiperSlide className="text-black flex flex-col gap-2 text-center justify-center rounded-md border-[1px] border-gray-400 px-4 py-3">
                        <img src="../../../public/pic-1.jpg" className="w-[80%] relative left-[.7rem] " alt="" />
                        <span className="text-gray-700 text-sm">Fish Burger</span>
                      </SwiperSlide>                      
                      <SwiperSlide className="text-black flex flex-col gap-2 text-center justify-center rounded-md border-[1px] border-gray-400 px-4 py-3">
                        <img src="../../../public/pic-1.jpg" className="w-[80%] relative left-[.7rem] " alt="" />
                        <span className="text-gray-700 text-sm">Fish Burger</span>
                      </SwiperSlide>                      
                      <SwiperSlide className="text-black flex flex-col gap-2 text-center justify-center rounded-md border-[1px] border-gray-400 px-4 py-3">
                        <img src="../../../public/pic-1.jpg" className="w-[80%] relative left-[.7rem] " alt="" />
                        <span className="text-gray-700 text-sm">Fish Burger</span>
                      </SwiperSlide>                     
                      <SwiperSlide className="text-black flex flex-col gap-2 text-center justify-center rounded-md border-[1px] border-gray-400 px-4 py-3">
                        <img src="../../../public/pic-1.jpg" className="w-[80%] relative left-[.7rem] " alt="" />
                        <span className="text-gray-700 text-sm">Fish Burger</span>
                      </SwiperSlide>                      
                      <SwiperSlide className="text-black flex flex-col gap-2 text-center justify-center rounded-md border-[1px] border-gray-400 px-4 py-3">
                        <img src="../../../public/pic-1.jpg" className="w-[80%] relative left-[.7rem] " alt="" />
                        <span className="text-gray-700 text-sm">Fish Burger</span>
                      </SwiperSlide>                    </Swiper>
                  </div>
                </div>
              </div>)}
             
            </div>


            {/* Profile Start */}
            <div className="block">
              <div className="profile flex items-center " onClick={ClickBoxs1}>
                <div onClick={profileClick} className={`absolute  cursor-pointer right-10 top-4 flex items-center gap-2 border-none rounded-md py-[.2rem] px-[.3rem] sm:py-[.5rem] sm:px-[.6rem] ease-in-out duration-200  ${backgroundColor}`}>
                  {/* Profile Image */}
                  <div>
                    <img src="../../../public/pexels-pixabay-34534.jpg" onClick={profileClick} alt="" className="lg:w- bg-cover bg-center  cursor-pointer lg:h-[6.2vh] md:h-[5.5vh] h-10 w-10 lg:w-10 md:w-[4.2vw] rounded-full border-2 border-white" />
                  </div>
                  {/* Profile Name */}
                  <div className="text-bold text-sm  block">Martin</div>
                  {/* Navigation Arrow */}
                  <MdNavigateNext  className={`text-[1.4rem] block cursor-pointer ${ChangeDireaction}`} />
                </div>
              </div>

              {profileSelect && (<div className="flex flex-col ease-in-out duration-100  hover:-translate-x-1  shadow-lg  bg-white text-gray-400 text-[10px] sm:text-sm absolute w-[137px]  top-20 right-10 items-start">
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 rounded-t-md"><CgProfile className="text-[#fc8019] text-xl" /> Profile</a>
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 "><MdOutlineMail className="text-[#fc8019] text-xl" /> Inbox</a>
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 "><FiEdit className="text-[#fc8019] text-xl" /> Edit Profile</a>
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 "><FaRegMessage className="text-[#fc8019] text-xl" />Message</a>
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 "><FaRegMessage className="text-[#fc8019] text-xl" /> Notification</a>
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 "><AiTwotoneSetting className="text-[#fc8019] text-xl" /> Setting</a>
                <a href="" className="flex items-center gap-2 p-[.4rem] sm:p-[.6rem] w-full hover:bg-gray-200 rounded-b-md"><IoIosLogOut className="text-[#fc8019] text-xl" /> Logout</a>
              </div>
              )}
            </div>


            {/* Profile End */}

          </div>
        </div>
      </header>
     
    </div>
  );
};

export default Nav;
