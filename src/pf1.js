import React from 'react';
import './App.css';

const userData = [
  {
    name: 'Scott Ayres',
    title: 'Busting social media myths at the Social Media Lab',
    connections: 23,
    image: 'profile.jpg',
  },
  {
    name: 'Richard Beeson',
    title: 'SaaS Customer Onboarding Manager / Producer and...',
    connections: 7,
    image: 'profile.jpg',
  },
  {
    name: 'Jacob Hilpertshauser',
    title: 'Harness your social media content and engagemen...',
    connections: 5,
    image: 'profile.jpg',
  },
  {
    name: 'Stephanie Sweeney',
    title: 'Customer Support / Software QA Tester',
    connections: 4,
    image: 'profile.jpg',
  },
  {
    name: 'Sarah Hecker',
    title: 'US Support & Affiliate Manager at Agorapulse',
    connections: 3,
    image: 'profile.jpg',
  },
  {
    name: 'Curt Ziegler',
    title: 'Customer Support Hero at Agorapulse',
    connections: 3,
    image: 'profile.jpg',
  },
  {
    name: 'Hannah Recker',
    title: 'Inbound & Marketing Operations Manager at...',
    connections: 4,
    image: 'profile.jpg',
  },
  {
    name: 'Michael Angiletta',
    title: 'Growth Marketing | CMO | Agorapulse',
    connections: 3,
    image: 'profile.jpg',
  },
];

function App() {
  return (
    <div className="grid-container">
      {userData.map((user, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <img src={user.image} alt={user.name} className="profile-image" />
            <h2>{user.name}</h2>
            <p>{user.title}</p>
            <p className="bold-text">
              <img src="profile.jpg" alt="connections icon" className="connections-icon" />
              {user.connections} shared connections
            </p>
            <hr />
            <button className="connect-button">Connect</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;