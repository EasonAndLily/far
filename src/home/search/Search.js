import React from 'react';
import Content from '../content/Content'
import courses from '../../config/courses.json';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.setCourse(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setCourse(nextProps);
    }

    setCourse(props) {
        const categoryId = props.match.params.id;
        const category = courses.flatMap(course => course.categories).find(category => category.id === categoryId);
        this.state = {
            articles: category.articles
        };
    }

    render() {
        return (
            <section className="col opacity-9">
                {
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
