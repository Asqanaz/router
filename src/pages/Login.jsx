import { useState } from "react"
import React from "react"

export const Login = ({userDatas}) => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")
    const [message, setMessage] = useState()

	const handleSubmit = (e) => {
        e.preventDefault()
        if(login === userDatas.login && password === userDatas.password){
            setMessage("Access allowed!")
        }
        else{
            setMessage("Access denied!!")
        }
    }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="login" onChange={e => setLogin(e.target.value)} />
				<input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <p>{message}</p>
                <button type = "submit">Submit</button>
			</form>
		</div>
	)
}
