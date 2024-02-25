import React, { useState } from "react";
import { UserCredentials } from "../../apiTypes";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //   console.log(credentials)
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        
        <button
          type="button"
          onClick={() => navigate("/create-account")}
          className="sign-up-button"
        >
          New user? Sign up here
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
