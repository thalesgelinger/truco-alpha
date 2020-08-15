import React from 'react'
import { icons } from '../../assets'

import './login.css'

export function LoginScreen() {
    return (
        <div className="login-container">
            <form>
                <label id="login">
                    <input 
                        type="text"
                        placeholder="Login"
                        id="login" 
                    />
                    <img 
                        src={icons.person} 
                        alt="user"
                        className="icon"
                    />
                </label>
                <button className="sign-in">
                    <span>Sign In</span>
                    <img 
                        src={icons.arrow} 
                        alt="sign-in"
                        className="icon"
                    />
                </button>
            </form>
        </div>
    )
}
