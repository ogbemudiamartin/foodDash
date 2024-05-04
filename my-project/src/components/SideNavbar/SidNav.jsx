import { Menu } from "antd";
import {AppstoreOutlined, ShopOutlined, CarOutlined, AppstoreAddOutlined} from '@ant-design/icons'


const SidNav = () => {
  return (
   <>
  
   <div className="flex fixed">
   <div className="bg-[#fc8623]">
        <div className="p-2 relative bg-white rounded-l-[2rem] border-r-[2px]  shadow-lg  w-[11vw] md:w-60 h-screen">
            <p className="text-sm text-[#fc8623] relative font-medium pt-10 pb-6 pl-10 ">Main Menu</p>
            <Menu theme="white" mode="inline"  className="metismenu flex flex-col gap-2">
               {/* dashboard start */}
              
              <Menu.SubMenu key="subtasks" title='DashBoard'  icon={<AppstoreOutlined />} className={`transition ease-in-out duration-300 text-[#7f7f7f]`}>
               <Menu.Item Key="tsk-1">
               <a to='Home' className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 "> Dashboard Light</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a to='home'  className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard Dark</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-3">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Food Order</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-4">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Favorite Menu</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-5">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Message</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-6">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Order History</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-7">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Notification</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-8">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Bill</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-9">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Setting</div>
                      </a>
               </Menu.Item>
               
            
              </Menu.SubMenu>
              {/* dashboard end */}
            

              {/* Resturant */}
            
             <Menu.SubMenu Key='subtask' title="Resturant" icon={<ShopOutlined />} className={`transition ease-in-out duration-300 text-[#7f7f7f] `}>
             <Menu.Item Key="tsk-">
               <a to='Home' className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 "> Dashboard Light</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a to='home'  className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard Dark</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Food Order</div>
                      </a>
               </Menu.Item>
             </Menu.SubMenu>
             
            {/* resturant end */}

            {/* drivers start */}
        
             <Menu.SubMenu Key='subtask' title="Drivers" icon={<CarOutlined />} className={`transition text-[#7f7f7f]  ease-in-out duration-300 `}>
             <Menu.Item Key="tsk-2">
               <a to='Home' className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 "> Dashboard Light</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a to='home'  className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard Dark</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Food Order</div>
                      </a>
               </Menu.Item>
             </Menu.SubMenu>
             {/* drivers end */}
             <p className="text-sm text-[#fc8623] relative font-medium  pb-4 left-10 mt-4">other</p>

               {/* App start */}
        
               <Menu.SubMenu Key='subtask' title="App" icon={<AppstoreAddOutlined />} className={`transition text-[#7f7f7f]  ease-in-out duration-300 `}>
             <Menu.Item Key="tsk-2">
               <a to='Home' className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 "> Dashboard Light</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a to='home'  className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] "> Dashboard Dark</div>
                      </a>
               </Menu.Item>
               <Menu.Item Key="tsk-2">
               <a href="#" className="flex items-center group active:bg-[#fc8019] rounded-md">
                         <div className=" w-2 group-hover:w-6 ease-in-out duration-300 h-[1px] border-2  border-[#fc8019] rounded-md"></div>
                         <div className="hover:text-[#fc8019] ease-in-out duration-300 pl-4 active:text-[#fff] ">Food Order</div>
                      </a>
               </Menu.Item>
             </Menu.SubMenu>
             {/* App end */}
            </Menu>
           
        </div>

      
    </div>
   </div>
   
   </>
 
  )
}

export default SidNav