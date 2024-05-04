import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"
import { Button } from "antd"

const ToggleTHemeButton = ( darkTheme, toggleTheme ) => {
  return (
    <div className="relative top-[33rem] right-[59px] flex items-center justify-center text-[1rem]">
        <Button className="ml-[15px]" onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
    </div>
  )
}

export default ToggleTHemeButton