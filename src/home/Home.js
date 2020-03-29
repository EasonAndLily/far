import React from 'react';
import './Home.css';
import Sidebar from './sidebar/Sidebar';

function Home() {
  return (
    <article className="row">
      <Sidebar></Sidebar>
      <section className="col">
        <header className="jumbotron">
          <h1>这是内容部分</h1>
        </header>
      </section>
    </article>
  );
}

export default Home;
