import React from 'react';
import Headline from './headline/HeadLine';
import Overview from './overview/Overview';

let thumbnails = [
  {
    title: 'MVC入门',
    poster:
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3785025244,1489888063&fm=26&gp=0.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一,MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。',
  },
  {
    title: 'MVC入门',
    poster:
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=248292353,2422083272&fm=26&gp=0.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一,MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。',
  },
  {
    title: 'MVC入门',
    poster:
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2274931468,651418564&fm=26&gp=0.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。',
  },
  {
    title: 'MVC入门',
    poster:
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1267297012,3857394705&fm=26&gp=0.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。',
  },
];

let nav = {
  tabs: [
    { id: 'latest-tab', href: 'latest', title: '最新', isActive: true },
    { id: 'java-tab', href: 'java', title: 'Java', isActive: false },
    {
      id: 'javascript-tab',
      href: 'javascript',
      title: 'JavaScript',
      isActive: false,
    },
    { id: 'python-tab', href: 'python', title: 'Python', isActive: false },
  ],
  contents: [
    {
      id: 'latest',
      tabId: 'latest-tab',
      thumbnails: thumbnails,
      isActive: true,
    },
    {
      id: 'java',
      tabId: 'java-tab',
      isActive: false,
      thumbnails: [],
    },
    {
      id: 'javascript',
      tabId: 'javascript-tab',
      isActive: false,
      thumbnails: thumbnails,
    },
    {
      id: 'python',
      tabId: 'python-tab',
      isActive: false,
      thumbnails: [],
    },
  ],
};

function Home() {
  return (
    <section className="col opacity-9">
      <Headline></Headline>
      <Overview title="编程语言基础教程" nav={nav}></Overview>
      <Overview title="编程语言基础教程" nav={nav}></Overview>
    </section>
  );
}

export default Home;
