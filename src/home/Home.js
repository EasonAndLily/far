import React from 'react';
import './Home.css';
import Sidebar from './sidebar/Sidebar';

function Home() {
  return (
    <main className="container">
      <article className="row">
        <Sidebar></Sidebar>
        <section className="col opacity-9">
          <header className="jumbotron">
            <h1>这是内容部分</h1>
          </header>
        </section>
      </article>
    </main>
  );
}

export default Home;
