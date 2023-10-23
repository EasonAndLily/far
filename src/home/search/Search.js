import React from 'react';
import Content from '../content/Content'
import courses from '../../config/courses.json';
import NoData from './nodata-modified.png';
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.setCourse(this.props);
        this.state = {
            articles: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setCourse(nextProps);
    }

    setCourse(props) {
        if (props.match.path.includes('search')) {
            const search = props.location.search;
            const params = new URLSearchParams(search);
            const keyword = params.get('value');
            const articles = courses.flatMap(course => course.categories)
                .flatMap(item => item.articles).filter(it => it && it.title.includes(keyword));
            this.setState({
                articles: articles
            });
            return;
        }

        const categoryId = props.match.params.id;
        if (categoryId) {
            const category = courses.flatMap(course => course.categories)
                .find(category => category.id === categoryId);
            this.setState({
                articles: category.articles
            });
        }
    }

    render() {
        return (
            <section className="col opacity-9">
                {
                    this.state.articles.length === 0 ?
                        <figure className="figure w-100 text-center">
                            <img src={NoData} className="figure-img img-fluid" alt="没有数据"></img>
                            <figcaption className="figure-caption text-center">
                                <h3 className='float-title'>暂无相关文章，敬请期待！</h3>
                            </figcaption>
                        </figure> :
                        this.state.articles.reduce((accumulator, currentValue, currentIndex, array) => {
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
}


export default Search;
