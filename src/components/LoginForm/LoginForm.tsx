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
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 shadow rounded-lg p-8 my-20 mx-auto w-9/12 max-w-xl lg:w-8/12 lg:max-w-5xl gap-5 font-satisfy">
      <h2 className="text-3xl text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-1 w-full">
      <div className="container mx-auto px-4 item-center">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 border-green rounded px-2.5 py-1.5 text-xl text-gray-800 w-full mb-4"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-2 border-green rounded px-2.5 py-1.5 text-xl text-gray-800 w-full mb-4"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit" className="bg-green rounded text-xl text-black w-7/12 px-5 py-2.5 transition-colors duration-500 ease-in-out mb-4 hover:text-white">Submit</button>
        <button
          type="submit"
          onClick={() => navigate("/create-account")}
          className="bg-green rounded text-xl text-black px-5 py-2.5 transition-colors duration-500 ease-in-out hover:text-white"
        >
          New user? Sign up here
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
