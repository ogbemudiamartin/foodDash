import Navbar from './components/Navbar/Nav'
import SideNav from './components/SideNavbar/SidNav'
import './App.css'
function App() {

  return (
    <>
    <div className="">
      {/* head start*/}
      <Navbar />
      {/* head end */}

      {/* body start*/}
      <div className="flex">
        <div className="sidNav">
          <SideNav />
        </div>
        <div className="">
          Main
        </div>
      </div>
    </div>
    </>
  )
}

export default App
