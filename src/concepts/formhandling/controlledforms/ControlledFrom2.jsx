import React, { useState } from 'react'

const ControlledFrom2 = () => {

    const [formData,setfromData] = useState({
        username: "",
        email: "",
        password: "",
        course: ""
    })

    const {username,email,password,course} = formData

    const handleInput=(e)=>{
        const {name,value} = e.target
        setfromData({ ...formData, [name]: value })
    }

    const handleForm=(e)=>{
        e.preventDefault()
        //! write a logic to send the data to backend
        console.log(formData)
        setfromData({
            username: "",
            email: "",
            password: "",
            course: ""
        })
    }


    return (
        <div>
            <form onSubmit={handleForm}>
                <div>
                    <input type="text" placeholder='entert your name' name='username'  onChange={handleInput} value={username}/>
                    <br />
                    <input type="email" placeholder='entert your email' name='email' onChange={handleInput} value={email}/>
                    <br />
                    <input type="password" placeholder='entert your password' name='password'  onChange={handleInput} value={password}/>
                    <br />
                </div>
                <div>
                    <label htmlFor="">course</label>
                    <select name="course" value={course} onChange={handleInput}>
                        <option value=""></option>
                        <option value="B.tech">B.tech</option>
                        <option value="MCA">MCA</option>
                        <option value="M.tech">M.tech</option>
                        <option value="BCA">BCA</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ControlledFrom2