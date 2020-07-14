import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import "./login.css"

export function LoginScreen() {
    
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
        return <Redirect to={`/home/${username}`}/>
    }
    
    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h1>Truco</h1>
                    <form onSubmit={handleSubmit}>
                        {/* <label id="username">Username</label> */}
                        <input 
                            id="username" 
                            type="text" 
                            value={username}
                            placeholder="Type your username..."
                            onChange={e => setUsername(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
