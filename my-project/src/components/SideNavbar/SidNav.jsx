import { RxDashboard } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import { CiShop } from "react-icons/ci";
import { GiDutchBike } from "react-icons/gi";
import { MdErrorOutline } from "react-icons/md";

const SidNav = () => {
   const [dashBoard, setDashBoard] = useState(false);
   const [arrow, setArrow] = useState(false)
   const [resturant, setResturant] = useState(false);
   const [arrow2, setArrow2] = useState(false)
   const [drivers, setDrivers] = useState(false);
   const [arrow3, setArrow3] = useState(false)
   const [apps, setApps] = useState(false);
   const [arrow4, setArrow4] = useState(false)
   const ClickBox = () =>{
      setDashBoard(!dashBoard)
      setArrow(!arrow)
   }
   const ClickBox2 = () =>{
      setResturant(!resturant)
      setArrow2(!arrow2)
   }
   const ClickBox3 = () =>{
      setDrivers(!drivers)
      setArrow3(!arrow3)
   }
   const ClickBox4 = () =>{
      setApps(!apps)
      setArrow4(!arrow4)
   }
   const ChangeDireaction = arrow ? 'rotate-90' : 'rotate-0';
   const ChangeDireactions = arrow2 ? 'rotate-90' : 'rotate-0';
   const ChangeDireactionss = arrow3 ? 'rotate-90' : 'rotate-0';
   const ChangeDireactionsss = arrow4 ? 'rotate-90' : 'rotate-0';
  return (
   <>
  
   <div className="flex">
   <div className="bg-[#fc8623]">
        <div className="p-2 relative bg-white rounded-l-[2rem] border-r-[2px]  shadow-lg  w-60 h-screen">
            <p className="text-sm text-[#fc8623] relative font-medium pt-10 pb-6 left-10">Main Menu</p>
            <ul className="metismenu flex flex-col gap-7">
               {/* dashboard start */}
              <li className="">
                <div className="flex  text-center pl-4 cursor-pointer " onClick={ClickBox}>
                  <RxDashboard className=" pt-[.1rem]  text-[#9da6b4]  text-[1.4rem] "/>
                  <div className="transition  ease-in-out  0.5s pr-12  pl-4 text-[#7f7f7f] hover:text-[#fc8623]">Dashboard</div>
                  <FaCaretRight className={`text-[#c8c8c8] text-lg transition ease-in-out duration-200  ${ChangeDireaction}`}/>
                </div>
                {dashBoard && (  <ul className="transition ease-in-out duration-300">
                  <li>
                    <div className="flex flex-col pl-10 pt-5 gap-2 text-sm text-[#7b7b7b] text-start">
                      <a to='Home' className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard Light</div>
                      </a>

                      <a to='home'  className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard Dark</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Food Order</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Favorite Menu</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Message</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Order History</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Notification</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Bill</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Setting</div>
                      </a>
                     </div>
                   </li>
                </ul>)}
              </li>
              {/* dashboard end */}

              {/* Resturant */}
             <li>
                <div onClick={ClickBox2} className="flex  text-center pl-4 cursor-pointer ">
                  <CiShop className=" pt-[.1rem]  text-[#9da6b4]  text-[1.4rem] "/>
                  <div className="transition  ease-in-out  0.5s pr-[3rem]  pl-4 text-[#7f7f7f] hover:text-[#fc8623]">Restaurant</div>
                  <FaCaretRight className={`text-[#c8c8c8] text-lg transition ease-in-out duration-200 ${ChangeDireactions}`}/>
                </div>
               {resturant && (
                  <li className="transition ease-in-out duration-300">
                <div className="flex flex-col pl-10 pt-5 gap-2 text-sm text-[#7b7b7b] text-start">
                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Menu</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Orders</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Reviews</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Setting</div>
                      </a>
                     </div>
                </li>
               )}  
             </li>
            {/* resturant end */}

            {/* drivers start */}
            <li>
                <div onClick={ClickBox3} className="flex  text-center pl-4 cursor-pointer ">
                  <GiDutchBike className=" pt-[.1rem]  text-[#9da6b4]  text-[1.4rem] "/>
                  <div className="transition  ease-in-out  0.5s pr-[4.7rem]  pl-4 text-[#7f7f7f] hover:text-[#fc8623]">Drivers</div>
                  <FaCaretRight className={`text-[#c8c8c8] text-lg transition ease-in-out duration-200 ${ChangeDireactionss}`}/>
                </div>
               {drivers && (
                  <li className="transition ease-in-out duration-300">
                <div className="flex flex-col pl-10 pt-5 gap-2 text-sm text-[#7b7b7b] text-start">
                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Orders</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Feedback</div>
                      </a>
                     </div>
                </li>
               )}  
             </li>
             {/* drivers end */}
            </ul>
            <p className="text-sm text-[#fc8623] relative font-medium pt-10 pb-4 left-10 mt-4">other</p>
            <ul className="metismenu flex flex-col gap-7 ">
            <li className="">
                <div className="flex  text-center pl-4 cursor-pointer " onClick={ClickBox4}>
                  <MdErrorOutline className=" pt-[.1rem]  text-[#9da6b4]  text-[1.4rem] "/>
                  <div className="transition  ease-in-out  0.5s pr-[5.3rem]  pl-4 text-[#7f7f7f] hover:text-[#fc8623]">Apps</div>
                  <FaCaretRight className={`text-[#c8c8c8] text-lg transition ease-in-out duration-200  ${ChangeDireactionsss}`}/>
                </div>
                {apps && (  <ul className="transition ease-in-out duration-300">
                  <li>
                    <div className="flex flex-col pl-10 pt-5 gap-2 text-sm text-[#7b7b7b] text-start">
                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Profile</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Post Details</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Email</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Calendar</div>
                      </a>

                      <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] flex transition  ease-in-out  0.5s  text-center ease-in-out duration-300 pl-4 active:text-[#fff] ">
                         <span className="pr-[3rem]">Shop</span>
                           <FaCaretRight className={`text-[#c8c8c8]  text-lg transition ease-in-out duration-200  ${ChangeDireactionsss}`}/>

                         </div>
                      </a>

                     </div>
                   </li>
                </ul>)}
              </li>
            </ul>
        </div>

      
    </div>
   </div>
   
   </>
 
  )
}

export default SidNav