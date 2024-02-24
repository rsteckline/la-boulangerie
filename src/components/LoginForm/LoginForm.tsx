import React, { useState } from 'react';
import { UserCredentials } from "../../apiTypes";
import './LoginForm.css';

function LoginForm() {
    const [credentials, setCredentials] = useState<UserCredentials>({ email: '', password: '' });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCredentials({ ...credentials, [name]: value })
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    //   console.log(credentials)
    };
  
    return (
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="name" 
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
          </form>
        </div>
      )
    }
  
  export default LoginForm;