import React, { useState } from 'react'

const ControlledFromHandling = () => {

  const [formData, setfromData] = useState({
    username: "",
    // email :  "",
    // phoneno : "",
    // password : ""
  })

  const [errors, setErrors] = useState(null)

  const handleInput = (e) => {
    const { name, value } = e.target
    setErrors(null) 
    setfromData({ ...formData, [name]: value })
  }

  const handleForm = (e) => {
    e.preventDefault()
    if (!formData.username) {
      setErrors(true)
    }
    setfromData({
      username: ""
    })
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder='username' name='username' onChange={handleInput} value={formData.username} />
        {
          errors ? <p style={{ color: "red" }}>Username is requir <sup>*</sup></p> : ""
        }

        {/* <input type="email" placeholder='email' name='email' onChange={handleInput} />
        <input type="number" placeholder='phoneno' name='phoneno' onChange={handleInput} />
        <input type="password" placeholder='password' name='password' onChange={handleInput} /> */}
        <br />
        <button>Submit</button>
      </form>

      <h1>{formData.username}</h1>
      {/* <h1>{formData.email}</h1>
      <h1>{formData.phoneno}</h1>
      <h1>{formData.password}</h1> */}

    </div>
  )
}

export default ControlledFromHandling
