import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import courses from '../../config/courses.json';
import { Route } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.generateCategoryUI = this.generateCategoryUI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      courses: courses
    };
  }

  handleClick(id) {
    this.props.history.push(`/category/${id}/articles`);
  }

  generateCategoryUI() {
    return this.state.courses.map((item) => (
      <details key={item.id}>
        <summary className="pt-1 pb-1">
          {item.name}
        </summary>
        {
          item.categories.map((category) => (
            <Route key={category.id} render={({ history }) => {
              return (<p key={category.id} onClick={() => history.push(`/category/${category.id}/articles`)}>
                <Link to={`/category/${category.id}/articles`} className="text-dark">
                  {category.type === "folder" ? category.title + "（" + category.articles.length + "篇）" : category.title}
                </Link>
              </p>)
            }} />
          ))
        }

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
