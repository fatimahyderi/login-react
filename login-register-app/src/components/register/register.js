import React, {useState} from "react";
import "./register.css"
import axios from "axios"

const Register = () => {
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        // console.log(e.target)
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            console.log("usergggg")
            axios.post("http://localhost:8080/register", user)
            .then( res => console.log(res)
                //{ alert(res.data.message)
                // history.push("/login")}
                )
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button">Login</div>
    </div>
    )
}

export default Register