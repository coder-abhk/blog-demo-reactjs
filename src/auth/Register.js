import React from 'react'
const Register = () =>{
    return(
        <div className="login__container">
            <h1 style={{ marginBottom: 16 }}>SignUp Today!</h1>
      <form>
        <p>Username</p>
        <input type="text" placeholder="username" />
        <p>Password</p>
        <input type="password" placeholder="password" />
        <p>
          <button type="submit">SignUp</button>
        </p>
      </form>
        </div>
    )
}

export default Register