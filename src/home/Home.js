import React from 'react';
import './Home.css';
import Sidebar from './sidebar/Sidebar';
import Blog from './blog/Blog';

function Home() {
  return (
    <main className="container mt-5 pt-5">
      <article className="row">
        <Sidebar></Sidebar>
        <Blog></Blog>
      </article>
    </main>
  );
}

export default Home;
