import React from 'react';
import './NewsContainer.css';
import App from '../App/App.js';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = (props) => {
	return (
		props.map(article => {
			return <NewsArticle key={article.id} headline={article.headline} description={article.description}/>
		})
	)
}

export default NewsContainer;