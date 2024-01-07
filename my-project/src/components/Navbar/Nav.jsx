import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";



const options = ['Nigeria', 'Japan', 'Denmark', 'Algeria', 'Germany', 'China', 'London', 'Spain', 'Norway'];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [profileSelect, setProfileSelect] = useState(false)
  const [color, setColor] = useState(false)

  const profileClick = () => {

     setProfileSelect(!profileSelect)
     setColor(!color)
     
  }
  // Function to toggle the dropdown menu
  const toggling = () => setIsOpen(!isOpen);
  const backgroundColor = color ? 'bg-[#fff] text-gray-500' : 'bg-[#fc8e32]';
  // Function to handle option click
  const onOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Header Navbar */}
      <header className="flex items-center p-[.9rem] bg-[#fc8019] gap-[3rem] text-[#fff] w-[100vw]">
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
          <div className="icon text-[#fff] lg:block md:hidden block pt-2 text-[2.1rem] cursor-pointer font-extrabold">
            <HiOutlineMenuAlt2 />
          </div>
          {/* Navbar Search and Profile */}
          <div className="main flex gap-[1rem] font-serif">
            {/* Search Container */}
            <div className="search border-solid flex gap-[1rem] border-[1px] rounded-md border-[#fd9c4b] bg-[#fc8e32] py-[.7rem] px-[1.5rem]">
              {/* Selection Start */}
              <div
                className="h-[3.5vh] w-[11vw]   bg-[rgb(252,128,25,.2)] pr-8 border-solid border-white outline-none cursor-pointer flex items-center gap-2 p-2"
                onClick={toggling}
              >
                <div className=""><FaLocationDot className="text-[.9rem]  text-white"/></div>
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
                <div className="main absolute top-[3rem] left-[19.1rem] z-10 mt-4 origin-top-right text-black rounded-sm border-none bg-white">
                  {/* Dropdown Options */}
                  {options.map((option) => (
                    <div key={Math.floor(Math.random() * 1000)} className="w-[230px] text-gray-400 hover:text-orange-500 hover:bg-orange-100">
                      <button
                        type="button"
                        key={Math.floor(Math.random() * 1000)}
                        onClick={() => onOptionClick(option)}
                        className="rounded-md flex gap-3 items-center px-4 py-[.6rem] text-sm "
                      >
                        <FaLocationDot className="text-[12px] "/> {option}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {/* Selection End */}
              {/* Search Input */}
              <div className="relative flex">
                <span className="text-white absolute left-5 top-1 cursor-pointer"> <BsSearch /></span>
                <input
                  type="text"
                  placeholder="What do you want to eat today"
                  className="outline-none md:text-sm lg:text-md border-l-2 border-white pl-12  placeholder:text-white md:w-[28vw] w-[4vw]  h-[3.5vh] bg-transparent "
                />
              </div>
              {/* Search End */}
            </div>

            {/* Profile Start */}
            <div className="block">
            <div className="profile flex items-center ">
              <div onClick={profileClick}   className={`absolute  cursor-pointer right-[2rem] top-[10px] flex items-center gap-[9px] border-none rounded-md  py-[.5rem] px-[.6rem]  ${backgroundColor}`}>
                {/* Profile Image */}
                <div>
                  <img src="../../../public/me1.png" onClick={profileClick} alt="" className="lg:w-[2.8vw] bg-cover bg-center cursor-pointer lg:h-[6.2vh] md:h-[5.5vh] h-[5.2vh] w-[4.5vw]   md:w-[4.2vw] rounded-full border-2 border-white"/>
                </div>
                {/* Profile Name */}
                <div className="text-bold text-sm hidden lg:block">Martin</div>
                {/* Navigation Arrow */}
                <MdNavigateNext onClick={profileClick} className="text-[1.4rem] hidden lg:block cursor-pointer"/>
              </div>
            </div>

            {profileSelect && (<div className="flex flex-col gap-[1rem]  shadow-lg ease-in-out bg-white text-gray-400 text-sm absolute w-[137px] p-[.7rem] top-[4.2rem] right-[2rem] items-start">
              <a href="" className="flex items-center gap-2 "><CgProfile className="text-[#fc8019] text-xl"/> Profile</a>
              <a href="" className="flex items-center gap-2 "><MdOutlineMail  className="text-[#fc8019] text-xl"/> Inbox</a>
              <a href="" className="flex items-center gap-2"><FiEdit  className="text-[#fc8019] text-xl"/> Edit Profile</a>
              <a href="" className="flex items-center gap-2"><FaRegMessage className="text-[#fc8019] text-xl"/>Message</a>
              <a href="" className="flex items-center gap-2"><FaRegMessage  className="text-[#fc8019] text-xl"/> Notification</a>
              <a href="" className="flex items-center gap-2"><AiTwotoneSetting  className="text-[#fc8019] text-xl"/> Setting</a>
              <a href="" className="flex items-center gap-2"><IoIosLogOut className="text-[#fc8019] text-xl" /> Logout</a>
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
