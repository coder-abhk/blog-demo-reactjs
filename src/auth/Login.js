import React, {useState} from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const signInHandler = ()=>{
   
      axios.post("/signin", {
        username: username,
        password: password
      }).then((res)=>{
        setMessage(res.data.message)
      })
      .catch(err=>{
        console.error(err.message)
      })
      setUsername("")
      setPassword("")
   
  }

  return (
    <div className="login__container">
      <h1 style={{ marginBottom: 16 }}>SignIn Now!</h1>
      <p style={{color: "orange", fontSize: 20, marginBottom: 10}}>{message}</p>
      <form>
        <p>Username</p>
        <input type="text" placeholder="username" value={username} onChange={e=>{
          setUsername(e.target.value)
        }} />
        <p>Password</p>
        <input type="password" placeholder="password" value={password} onChange={e=>{
          setPassword(e.target.value)
        }} />
        <p>
          <button type="submit" onClick={(e)=>{
            e.preventDefault()
            signInHandler()
          }}>SignIn</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
