import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = () => {
    axios
      .post("/signup", {
        username: username,
        password: password
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login__container">
      <h1 style={{ marginBottom: 16 }}>SignUp Today!</h1>
      <form>
        <p>Username</p>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signUpHandler();
            }}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
