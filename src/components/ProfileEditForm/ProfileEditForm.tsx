import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileEditForm.module.css';

interface Profile {
  name: string;
  email: string;
  bio: string;
}

const ProfileEditForm: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    bio: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    navigate('/profile');
  };

  return (
    <form className={styles.profileForm} onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={profile.bio}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileEditForm;