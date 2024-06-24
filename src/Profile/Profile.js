// src/Profile/Profile.js
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Sidebar from '../Sidebar/Sidebar';
import './styles.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    email: '',
    phoneNumber: '',
    numberOfCvs: 0,
    numberOfJobsApplied: 0,
    photoURL: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        await fetchUserProfile(user.uid);
      } else {
        window.location.href = '/login';
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserProfile = async (uid) => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      setProfile(userSnap.data());
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = async () => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, profile, { merge: true });
      alert('Profile updated successfully!');
    }
  };

  const handleEditProfilePicture = () => {
    // Logic to edit profile picture
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2>Profile</h2>
        <div className="profile-card-page">
          <img src={profile.photoURL || 'https://via.placeholder.com/150'} alt="Profile" className="profile-pic-page" />
          <button onClick={handleEditProfilePicture} className="edit-pic-button">Edit Profile Picture</button>
          <div className="profile-stats">
            <span>Number of CVs: {profile.numberOfCvs}</span>
            <span>Number of Jobs Applied: {profile.numberOfJobsApplied}</span>
          </div>
        </div>
        <div className="profile-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {/* Add more fields as necessary */}
          <button onClick={handleSaveProfile} className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
