import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from "../../service/api";
import "./login.css"

export function LoginScreen() {
    
    const [username, setUsername] = useState('')
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
        await api.post("/user", { 
            username
        }) 
        history.push(`/home/${username}`)
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
