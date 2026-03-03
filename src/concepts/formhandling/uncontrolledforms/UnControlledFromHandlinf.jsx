import React, { useRef } from 'react'
import { toast } from 'react-toastify'

const UnControlledFormHandling = () => {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleForm = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        if (!username) {
            usernameRef.current.style.outline = "2px solid red"
            toast.error("username is required", { position: "top-center" })
            setTimeout(() => {
                usernameRef.current.style.outline = "2px solid red"
            })
            return
        }
        if (!password) {
            passwordRef.current.style.outline = "2px solid red"
            toast.error("password is requite", { position: "top-center" })
            setTimeout(() => {
                usernameRef.current.style.outline = "none"
            })
            return
        }

        const data = {
            username,
            password
        }
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input type='text' placeholder='Enter your name' ref={usernameRef} />
                <br />
                <input type='password' placeholder='Enter your password' ref={passwordRef} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UnControlledFormHandling
