import SideBar from './components/SideNavbar/SidNav'
import Navbar from './components/Navbar/Nav'
import './App.css'
import Home from './components/Home/Home'

import { Layout } from 'antd';
import { useState } from 'react';
import ToggleTHemeButton from './components/ToggleTHemeButton';

const {  Header, Sider } = Layout;

function App() {
  const [ darkTheme, setDarkTheme] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
//  Header 
  return (
    <>
     <Layout>
    <div className="flex flex-col">
      <Layout>
        <Header>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
        </Header>
      </Layout>
      <div className="flex flex-row ">
       <div className="pr-[3rem]">
       
          <Sider theme={darkTheme ? 'light': `dark` } 
             collapsed={collapsed}
             collapsible
             className='text-[#fff]'>
            <SideBar/>
            <ToggleTHemeButton darkTheme={darkTheme} 
            toggleTheme={toggleTheme}/>
          </Sider>
        
       </div>
       <div className="">
        <Home />
       </div>

      </div>
    </div>
    </Layout>
    </>
    )
}

export default App
