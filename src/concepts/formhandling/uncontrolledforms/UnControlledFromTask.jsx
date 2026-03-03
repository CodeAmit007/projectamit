import React from 'react'
import { CiLock, CiUser } from 'react-icons/ci'

const UnControlledFromTask = () => {
    return (
        <>
            <div className="container">
                <div className="left">
                    <form>
                        <h1>Login</h1>
                        <p>How to i get started lorem ipsum dolor at ?</p>
                        <div class="input-box">
                            <CiUser />
                            <input type="text" placeholder="Username" />
                        </div>

                        <div class="input-box">
                            <CiLock />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button>Login user</button>
                        <div class="divider">
                            <span>Login with Others</span>
                        </div>
                        <button class="social-btn">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
                            Login with <b>google</b>
                        </button>

                        <button class="social-btn">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
                            Login with <b>facebook</b>
                        </button>

                    </form>
                </div>
                <div className="right">
    
                        <img src="https://www.soilsearch.in/assets/login-image.jpg" alt="girl" />
                    

                </div>
            </div>
        </>
    )
}

export default UnControlledFromTask