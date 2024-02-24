import React, { useState } from 'react';
import { NewUser } from "../../apiTypes";
import './CreateAcctForm.css';

function CreateAcctForm() {
    const [formData, setFormData] = useState<NewUser>({ name: '', email: '', password: '' })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // console.log(formData)
    };

    return (
        <div className="acct-form-container">
         <h2>Create Account</h2>
         <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={formData.name} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email"
                value={formData.email} 
                onChange={handleChange} 
                required
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={formData.password} 
                onChange={handleChange} 
                required 
            />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateAcctForm;