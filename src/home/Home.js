import React from 'react';
import Headline from './headline/HeadLine';
import Content from './content/Content';
import homeData from '../config/home.json';

function Home() {
  return (
    <section>
      <Headline article={homeData.headArticle}></Headline>
      {
        homeData.articles.reduce((accumulator, currentValue, currentIndex, array) => {
          if (currentIndex % 2 === 0) {
            accumulator.push(array.slice(currentIndex, currentIndex + 2));
          }
          return accumulator;
        }, []).map(articles => (
          <Content key={articles[0].id} firstArticle={articles[0]} secondArticle={articles.length > 1 ? articles[1] : null}></Content>
        ))
      }
    </section>
  );
}

export default Home;
