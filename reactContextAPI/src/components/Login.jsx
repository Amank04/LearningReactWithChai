import React, { useContext, useState } from "react";
import UserContext from "../Context/userContext";


const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password});
    }

  return (
    <div>
        <h1>Login </h1>
        <input type="text" 
        value={username}
        onChange={(e) => setusername(e.target.value)}
        required
        />

        <input type="password" 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        required
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;