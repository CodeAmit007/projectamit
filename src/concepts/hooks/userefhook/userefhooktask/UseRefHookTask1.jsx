import { useRef } from "react"
import "./useref.css"

const UseRefHookTask1=()=>{

    const themeRef = useRef()

    const changeTheme=()=>{
        themeRef.current.classList.toggle("dark")
    }

    return(
        <div className="homepage" ref={themeRef}>
            <button onClick={changeTheme}>Theme</button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repudiandae, rerum cupiditate dolor pariatur eaque quaerat laudantium dicta placeat quis recusandae iusto optio quod ducimus aut consequatur totam est quo ab facilis architecto dolores! Asperiores maxime debitis maiores nostrum, possimus quis. Veniam autem enim inventore officia, minus, aliquid ut voluptatem magnam, fugiat explicabo perferendis impedit sunt?</p>

        </div>
    )
}
export default UseRefHookTask1