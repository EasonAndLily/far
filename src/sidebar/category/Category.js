import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.generateCategoryUI = this.generateCategoryUI.bind(this);
    this.state = {
      categories: [
        {
          id: '1',
          title: '高效能产品交付模式',
          subTitles: [
            '开篇词（2篇）',
            '设计高效能组织架构（5篇）',
            '聚焦高价值业务模型（10篇）',
            '打造高质量交付模式（8篇）',
            '共创合理的监测指标（5篇）',
            '构建舒适的团队文化（2篇）',
          ],
        },
        {
          id: '2',
          title: '架构设计之道',
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
          subTitles: [
            'Java SE 教程',
            'JavaScript 教程',
            'Python3 教程',
            'Node 教程',
          ],
        },
        {
          id: '4',
          title: 'Java 响应式编程',
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
