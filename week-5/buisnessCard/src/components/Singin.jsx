import { useState } from "react"
import PropTypes from 'prop-types';
export function Signin({ updateState }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return <div>
        <input type="text" placeholder="username" onChange={function (e) {
            const value = e.target.value
            setUsername(value)
        }}></input>
        <input type="text" placeholder="password" onChange={function (e) {
            const value = e.target.value
            setPassword(value)
        }}></input>
        <button onClick={async () => {
            const response = await fetch('http://localhost:3000/user/signin', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "username": username,
                    "password": password
                }
            })
            const json = await response.json()
            if (json.username) {
                const newState = {
                    username: json.username,
                    description: json.description,
                    linkedIn: json.linkedIn,
                    gitHub: json.gitHub,
                    interests: json.interests
                }
                updateState(newState)
            }
            else {
                const token = json.token
                localStorage.setItem('token', token)
                alert(`you are singed in and you authorization token in ${token}`)
            }
        }}>Sign In</button>

    </div>
}
Signin.propTypes = {
    updateState: PropTypes.func.isRequired,

};