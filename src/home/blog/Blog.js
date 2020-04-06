import React from 'react';
import Headline from './headline/HeadLine';
import Overview from './overview/Overview';

let thumbnails = [
  {
    title: 'MVC入门',
    poster:
      'https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/flower.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。'
  },
  {
    title: 'MVC入门',
    poster:
      'https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/plant.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。'
  },
  {
    title: 'MVC入门',
    poster:
      'https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/deer.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。'
  },
  {
    title: 'MVC入门',
    poster:
      'https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/sculpture.jpg',
    description:
      'MVC作为目前最火的后端框架，它能使得业务层和视图层在逻辑上解耦，使得各层的职责和功能更加单一。'
  }
];

let nav = {
  tabs: [
    { id: 'latest-tab', href: 'latest', title: '最新', isActive: true },
    { id: 'java-tab', href: 'java', title: 'Java', isActive: false },
    {
      id: 'javascript-tab',
      href: 'javascript',
      title: 'JavaScript',
      isActive: false
    },
    { id: 'python-tab', href: 'python', title: 'Python', isActive: false }
  ],
  contents: [
    {
      id: 'latest',
      tabId: 'latest-tab',
      thumbnails: thumbnails,
      isActive: true
    },
    {
      id: 'java',
      tabId: 'java-tab',
      isActive: false,
      thumbnails: []
    },
    {
      id: 'javascript',
      tabId: 'javascript-tab',
      isActive: false,
      thumbnails: thumbnails
    },
    {
      id: 'python',
      tabId: 'python-tab',
      isActive: false,
      thumbnails: []
    }
  ]
};

function Blog() {
  return (
    <section className="col opacity-9">
      <Headline></Headline>
      <Overview title="编程语言基础教程" nav={nav}></Overview>
      <Overview title="编程语言基础教程" nav={nav}></Overview>
    </section>
  );
}

export default Blog;
