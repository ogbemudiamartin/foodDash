import SideBar from './components/SideNavbar/SidNav'
import Navbar from './components/Navbar/Nav'
import './App.css'
import Home from './components/Home/Home'

import { Layout } from 'antd';

function App() {
  const {  Sider } = Layout;
//  Header 
  return (
    <>
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row w-[100vw]">
       <div className="pr-2">
        <Layout>
          <Sider className='text-[#fff]'>
            <SideBar/>
          </Sider>
        </Layout>
       </div>
       <div className="">
        <Home />
       </div>

      </div>
    </div>
    </>
    )
}

export default App
