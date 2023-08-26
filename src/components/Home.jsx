import React from 'react';
import { Link } from 'react-router-dom';
import HomeChild from './HomeChild'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about?name=xiaohong&age=20">About</Link>
      <HomeChild />
    </div>
  );
}

export default Home;
