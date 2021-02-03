import React from "react";
const Login = () => {
  return (
    <div className="login__container">
      <h1 style={{ marginBottom: 16 }}>SignIn Now!</h1>
      <form>
        <p>Username</p>
        <input type="text" placeholder="username" />
        <p>Password</p>
        <input type="password" placeholder="password" />
        <p>
          <button type="submit">SignIn</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
