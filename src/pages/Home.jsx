import React, { useEffect, useState } from 'react';

function Home({users}) {
  

  return (
    <>
    <div className="about-container">
      <h1>About This Project (scroll below to see the data fetched from API)</h1>
      <p>
        This React.js web application is designed to display random user information fetched from an open-source API. 
        Below is an overview of the technologies and tools used in building this project:
      </p>

      <h2>Technologies Used:</h2>
      <ul>
        <li><strong>React.js:</strong> The core framework used for building the user interface. React's component-based architecture helps in creating reusable and modular UI elements that enhance the overall development experience.</li>
        <li><strong>Axios:</strong> A promise-based HTTP client used to fetch data from external APIs. Axios is chosen for its simplicity in handling asynchronous requests and robust error handling mechanisms.</li>
        <li><strong>React Router DOM:</strong> Used for client-side routing, enabling seamless navigation between different pages like Home and About without reloading the entire page. It makes the app feel like a single-page application (SPA).</li>
      </ul>

      <h2>API Integration:</h2>
      <ul>
        <li>
          <strong>Open-source API:</strong> The user data is fetched from an open-source API provided by 
          <a href="https://api.freeapi.app" target="_blank" rel="noopener noreferrer"> api.freeapi.app</a>. 
          The API delivers random user details, including names, pictures, gender, email, and more. 
          This data is dynamically rendered on the frontend, allowing for real-time updates.
        </li>
      </ul>
    </div>

    <div className="container">
      <h1 className="title">User Profiles</h1>
      <div className="user-grid">
        {Array.isArray(users) ? (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <img src={user.picture.large} alt={user.name.first} className="user-image" />
              <div className="user-details">
                <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
    </>
    
  );
}

export default Home;
