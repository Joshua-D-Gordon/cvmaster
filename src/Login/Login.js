// src/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <header>
        <h1>CV Master</h1>
      </header>
      <section className="hero">
        <h1>Welcome to CV Master</h1>
        <p>Create your professional CV easily</p>
      </section>
      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
          <button onClick={handleGoogleLogin}>Login with Google</button>
          <button onClick={handleFacebookLogin}>Login with Facebook</button>
        </div>
        <section className="faq">
          <h2>FAQ</h2>
          <p><strong>How do I create a CV?</strong> - Simply log in and follow the step-by-step instructions.</p>
          <p><strong>Can I use different templates?</strong> - Yes, we offer a variety of templates to choose from.</p>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"CV Master made it so easy to create a professional CV. I got the job I wanted!" - Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>"The templates are fantastic and the process is very user-friendly." - John Smith</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
