import React, { useState } from "react";

type RegisterProps = {
  onFormSwitch: (formName: string) => void;
};

export const Register: React.FC<RegisterProps> = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    // Handle the registration logic
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
      <button onClick={() => onFormSwitch('home')}>HomePage</button>
    </div>
  );
};
