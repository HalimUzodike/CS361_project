import React, { useState } from "react";

type LoginProps = {
  onFormSwitch: (formName: string) => void;
};

export const Login: React.FC<LoginProps> = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    // Handle the login logic
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
};
