import SideBar from './components/SideNavbar/SidNav'
import Navbar from './components/Navbar/Nav'
import './App.css'
import Home from './components/Home/Home'
import { Layout, Button } from 'antd';
import { useState } from 'react';
import ToggleTHemeButton from './components/ToggleTHemeButton';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const {  Sider, Header } = Layout;

function App() {
  const [ darkTheme, setDarkTheme] = useState(true)
  const [collaped, setCollapsed] = useState(false)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
//  Header 
  return (
    <>
     
       
          <Sider theme={darkTheme ? 'light': `dark` } 
             className='text-[#fff]'>
            <SideBar/>
            <ToggleTHemeButton darkTheme={darkTheme} 
            toggleTheme={toggleTheme}/>
          </Sider>
          <Layout>
            <Header>
              <Button type="text" icon={collaped ?
                 <HiOutlineMenuAlt2 /> : <HiOutlineMenuAlt2/>} />
            </Header>
          </Layout>

        
       <div className="">
        <Home />
       </div>

    </>
    )
}

export default App
