import React, { useState } from "react";

type LoginProps = {
  onFormSwitch: (formName: string) => void;
  onLoginSuccess: (userData: any) => void; // Prop for handling login success
};

export const Login: React.FC<LoginProps> = ({ onFormSwitch, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await authenticate({ email, password });
      onLoginSuccess(userData); // Call onLoginSuccess on successful authentication
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, handle login failure (e.g., show error message)
    }
  };

  const authenticate = async (credentials: { email: string; password: string }) => {
    // Simulating an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === "test@example.com" && credentials.password === "password") {
          resolve({ user: "Test User", token: "fake-jwt-token" }); // Mock response
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
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
      <button onClick={() => onFormSwitch('home')}>HomePage</button>
    </div>
  );
};
