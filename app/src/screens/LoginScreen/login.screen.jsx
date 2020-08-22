import React, { useState } from 'react'
import { icons } from '../../assets'

import './login.css'
import { useHistory } from 'react-router-dom'

export function LoginScreen() {

    const [username, setUsername] = useState('')

    const history = useHistory()

    function handleSignIn(e) {
        e.preventDefault()
        history.push('/lobby', { username })
    }

    return (
        <div className="login-container">
            <form>
                <label id="login">
                    <input 
                        type="text"
                        placeholder="Login"
                        id="login" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <img 
                        src={icons.person} 
                        alt="user"
                        className="icon"
                    />
                </label>
                <button className="sign-in" onClick={handleSignIn}>
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
