


import SideBar from './components/SideNavbar/SidNav'
import Navbar from './components/Navbar/Nav'

import './App.css'
import Home from './components/Home/Home'
import { useState } from 'react';
import { Layout } from 'antd';

const { Sider } = Layout

function App() {
  const [ collapsed, setCollapsed ] = useState(false)

//  Header 
  return (
    <>
    <div className="flex flex-col">
      <div className=""><Navbar collapsed={collapsed} setCollapsed={setCollapsed}/></div>
      <div className="flex ">
        <div className=""><Sider  collapsed={collapsed} collapsible trigger={null}><SideBar /></Sider></div>
        <div className=""><Home /></div>
      </div>
    </div>
    </>
    )
}

export default App
