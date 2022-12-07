import React, {useState} from "react"
import { NavLink } from "react-router-dom"

export const Register = ({setUserDatas}) => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserDatas({
            login: login,
            password: password
        })
    }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="login" onChange={e => setLogin(e.target.value)} />
				<input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} />
				<button type="submit">Submit</button>
			</form>

            <NavLink to = "/login">Go to Login</NavLink>
		</div>
	)
}
