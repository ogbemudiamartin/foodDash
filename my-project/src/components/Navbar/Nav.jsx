import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { FaLocationDot } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const options = ['Nigeria','japan','Denmark', 'Algeria','Germany', 'China', 'London', 'Spain', 'Norway']

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const toggling = () => setIsOpen(!isOpen)
  const onOptionClick = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  return (
    <div>
      {/* header Navbar */}
      <header className="flex items-center p-[.9rem] bg-[#fc8019] gap-[3rem] text-[#fff] w-[100vw]">
       {/* head logo */}
       <a href="#" className="flex text-[1.4rem] gap-1">
        <span>
        <img src="../../../public/logo.png" alt="" />
        </span>
        <span className="pt-[3px] font-bold text-[1.5rem]">FoodDesk.</span>
       </a>
       {/* head logo end */}

        <div className="flex flex-row gap-[2.4rem]">
          {/* menu icon */}
          <div className="icon text-[#fff] pt-2 text-[2.1rem] cursor-pointer font-extrabold"><HiOutlineMenuAlt2 /></div>
          {/* navbar search and profile */}
          <div className="main flex gap-[1rem] font-serif">
            <div className="search border-solid  flex gap-[1rem] border-[1px] rounded-md border-[#fd9c4b] bg-[#fc8e32] py-[.7rem] px-[1.5rem]">
             {/* selection start */}
              
              {/* <select name="" id="country" className="outline-none h-[3.5vh] w-[15vw] bg-[rgb(252,128,25,.2)] pr-[2rem]   border-solid border-white ">
                <option value="spain"><FaLocationDot /> Spain</option>
                <option value="Nigeria"><FaLocationDot /> Nigeria</option>
                <option value="Germany"><FaLocationDot /> Germany</option>
                <option value="Denmark"><FaLocationDot /> Denmark</option>
                <option value="Japan"><FaLocationDot /> Japan</option>
                <option value="Brazil"><FaLocationDot /> Brazil</option>
                <option value="China"><FaLocationDot /> China</option>
                <option value="Nepal"><FaLocationDot /> Nepal</option>
                <option value="Lithuania"><FaLocationDot /> Lithuania</option>
              </select>  */}
             <div
               className="h-[3.5vh] w-[12vw] bg-[rgb(252,128,25,.2)] pr-8 border-solid border-white outline-none cursor-pointer flex items-center justify-between p-2"
               onClick={toggling}>
                {selectedOption || 'Aulgaria'}
             </div>

              <div className="relative">
                <button type="button" className=" inline-flex h-full item-center justify-center rounded-t-md border-1
                border-gray-10  px-4 text-white" onClick={toggling}><FaAngleDown /></button>
              </div>
              {isOpen && ( <div className="main  absolute top-[3rem] left-[19.1rem] z-10 mt-4
              origin-top-right text-black rounded-md  border-none bg-white">
       {options.map((option) => (
       <div  key={Math.floor(Math.random() * 1000)} className="w-[240px] text-gray-500  hover:text-orange-500 hover:bg-orange-100">
         <button type="button" 
        key={Math.floor(Math.random() * 1000)}
         onClick={() => onOptionClick(option)} // Corrected the function call
        
          className=" rounded-md flex gap-3 items-center px-4 py-[1.1] text-sm ">
           <FaLocationDot className="text-[12px] "/> {option}
       </button>
       </div>
      
))}
            
              </div>
              ) }
             

             {/* selection end */}
              {/* search input */}
              <div className="relative flex">
                <span className="text-white absolute left-5 top-1 cursor-pointer"> <BsSearch /></span>
                <input type="text" placeholder="What do you want eat today" className="outline-none border-l-2 border-white pl-12 placeholder:text-white w-[28vw] h-[3.5vh] bg-transparent "/>
              </div>
              {/* search end */}
            </div>

            {/* profile start */}
            <div className="profile flex  items-center ">
              <div className="absolute right-[2rem] top-[10px] bg-[#fc8e32]  flex \ items-center gap-[9px] border-[1px] rounded-md border-[#fd9c4b] py-[.5rem] px-[.6rem]">
                <div className="">
                <img src="../../../public/me1.png" alt="" className="w-[2.8vw] bg-cover bg-center  h-[6.2vh] rounded-full border-2 border-white"/>
                </div>
              <div className="text-bold text-sm">Martin</div>
              <MdNavigateNext className="text-[1.4rem]  cursor-pointer"/>
              </div>
              
            </div>
            {/* profile end */}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav