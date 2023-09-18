import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import courses from '../../config/courses.json';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.generateCategoryUI = this.generateCategoryUI.bind(this);
    this.state = {
      courses: courses
    };
  }

  generateCategoryUI() {
    return this.state.courses.map((item) => (
      <details key={item.id}>
        <summary className="pt-1 pb-1">
          {item.name}
        </summary>
        {item.categories.map((category) => (
          <p key={category.id}>
            <Link to="/course" className="text-dark">
              {category.type === "folder" ? category.title + "（"+ category.articles.length +"篇）" : category.title}
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
