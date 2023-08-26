// About.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function About() {
  const [params] = useSearchParams()
  console.log(params.get('name'));
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}

export default About;
