import React from 'react';

function Home({ message }) {
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <p>Message from the backend: {message}</p>
    </div>
  );
}

export default Home;