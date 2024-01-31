import SideBar from './components/SideNavbar/SidNav'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,  Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<SideBar />}>
        <Route index element={<Home />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
