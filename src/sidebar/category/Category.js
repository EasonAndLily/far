import React, { useState, useEffect } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import categories from '../../config/category.json';
import { Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Category(props) {
  const [category, setCategory] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setCategory(categories);
  }, [props.location]);

  const categoryClick = (id) => {
    history.push(`/category/${id}/articles`);
  }

  return (
    <nav className="category bg-white rounded shadow mt-0 mt-sm-4 pt-sm-2 pt-1 pb-2">
      {category.map((item) => (
        <details key={item.id}>
          <summary className="pt-1 pb-1 pl-4" onClick={() => categoryClick(item.id)}>
            {item.name + "（" + item.articles.length + "篇）"}
          </summary>
          {
            item.articles.map((article) => (
              <Route key={article.id} render={({ history }) => {
                return (<p key={article.id} onClick={() => history.push(`/articles/${article.id}`)}>
                  <Link to={`/articles/${article.id}`} className="text-dark">
                    {article.title}
                  </Link>
                </p>)
              }} />
            ))
          }

        </details>
      ))}
    </nav>
  );
}

export default Category;
