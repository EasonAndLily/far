import React, { useState, useEffect } from 'react';
import Content from '../content/Content'
import categories from '../../config/category.json';
import NoData from './nodata-modified.png';
import './Search.css';

function Search(props) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setCourse(props);
    }, [props.location]);

    let setCourse = (props) => {
        if (props.match.path.includes('search')) {
            const search = props.location.search;
            const params = new URLSearchParams(search);
            const keyword = params.get('value');
            const items = categories.flatMap(category => category.articles)
                .filter(it => it && it.title.includes(keyword));
            setArticles(items);
            return;
        }

        const categoryId = props.match.params.id;
        if (categoryId) {
            const category = categories.find(category => category.id === categoryId);
            setArticles(category.articles);
        }
    }

    return (
        <section>
            {
                articles.length === 0 ?
                    <figure className="figure w-100 text-center">
                        <img src={NoData} className="figure-img img-fluid" alt="没有数据"></img>
                        <figcaption className="figure-caption text-center">
                            <h3 className='float-title'>暂无相关文章，敬请期待！</h3>
                        </figcaption>
                    </figure> :
                    articles.reduce((accumulator, currentValue, currentIndex, array) => {
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

export default Search;
