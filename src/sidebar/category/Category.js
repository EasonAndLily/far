import React from 'react';
import './Category.css';
import gear from './gear.svg';
import thought from './thought.svg';
import cleanCode from './clean-code.svg';
import openSource from './open-source.svg';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.generateCategoryUI = this.generateCategoryUI.bind(this);
    this.state = {
      categories: [
        {
          id: '1',
          title: '编程语言基础',
          icon: gear,
          subTitles: [
            'Java SE 教程',
            'JavaScript 教程',
            'Python3 教程',
            'Node 教程',
          ],
        },
        {
          id: '2',
          title: '编程设计思维',
          icon: thought,
          subTitles: [
            'Java SE 教程',
            'JavaScript 教程',
            'Python3 教程',
            'Node 教程',
          ],
        },
        {
          id: '3',
          title: '整洁代码与重构',
          icon: cleanCode,
          subTitles: [
            'Java SE 教程',
            'JavaScript 教程',
            'Python3 教程',
            'Node 教程',
          ],
        },
        {
          id: '4',
          title: '优秀开源项目',
          icon: openSource,
          subTitles: [
            'Java SE 教程',
            'JavaScript 教程',
            'Python3 教程',
            'Node 教程',
          ],
        },
      ],
    };
  }

  generateCategoryUI() {
    return this.state.categories.map((item) => (
      <details id={item.id}>
        <summary className="pt-1 pb-1">
          <img className="mr-2" src={item.icon} alt="gear" />
          {item.title}
        </summary>
        {item.subTitles.map((sub) => (
          <p>
            <Link to="/course" className="text-dark">
              {sub}
            </Link>
          </p>
        ))}
      </details>
    ));
  }

  render() {
    return (
      <nav className="category bg-white rounded shadow mt-0 mt-sm-4 pt-sm-2 pt-1 pb-2">
        {this.generateCategoryUI()}
      </nav>
    );
  }
}

export default Category;
