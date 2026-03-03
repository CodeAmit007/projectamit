import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import IMAGE from "../../assets/img.jpg"

const Icons_implimentation = () => {
  return (
    <div>
      <h1><IoHomeOutline size={100} color="red" fill="green"/></h1>
      <h1>
        <IoHomeSharp  fill="red"/>
      </h1>
      <img src={IMAGE} alt=""  width={200}/>
    </div>
  )
}
export default Icons_implimentation
