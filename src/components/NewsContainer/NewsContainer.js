import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = (props) => {
	return (
		props.news.map(article => {
			return <NewsArticle key={article.id} img={article.img} headline={article.headline} description={article.description} url={article.url}/>
		})
	)
}

export default NewsContainer;