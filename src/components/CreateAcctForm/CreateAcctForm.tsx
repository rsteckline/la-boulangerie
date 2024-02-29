import React, { useState } from "react";
import { NewUser } from "../../apiTypes";

function CreateAcctForm() {
  const [formData, setFormData] = useState<NewUser>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(formData)
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 shadow rounded-lg p-8 my-20 mx-auto w-9/12 max-w-2xl lg:w-8/12 lg:max-w-5xl gap-5 font-satisfy">
      <h2 className="text-2xl text-center">Create Account</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-1 w-full"
      >
        <div className="container mx-auto px-4 item-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-2 border-green rounded px-2.5 py-1.5 text-xl text-gray-800 w-full mb-4"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 border-green rounded px-2.5 py-1.5 text-xl text-gray-800 w-full mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="border-2 border-green rounded px-2.5 py-1.5 text-xl text-gray-800 w-full mb-4"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green rounded text-xl text-black px-5 py-2.5 transition-colors duration-500 ease-in-out hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateAcctForm;
