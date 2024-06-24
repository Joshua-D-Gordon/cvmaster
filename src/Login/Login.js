// src/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebase';
import { ref, set, get } from 'firebase/database';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const saveUserToDatabase = async (user) => {
    console.log('Saving user to database:', user); // Debugging log
    const userRef = ref(db, 'users/' + user.uid);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      console.log('User does not exist, creating new user entry');
      await set(userRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || '',
        cvs: {},
        jobTracker: {}
      });
      console.log('User saved to database successfully');
    } else {
      console.log('User already exists in the database');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user); // Debugging log
      await saveUserToDatabase(user);
      window.location.href = '/home';
    } catch (error) {
      console.error('Error logging in:', error); // Debugging log
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google logged in user:', user); // Debugging log
      await saveUserToDatabase(user);
      window.location.href = '/home';
    } catch (error) {
      console.error('Error logging in with Google:', error); // Debugging log
      setError(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Facebook logged in user:', user); // Debugging log
      await saveUserToDatabase(user);
      window.location.href = '/home';
    } catch (error) {
      console.error('Error logging in with Facebook:', error); // Debugging log
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
