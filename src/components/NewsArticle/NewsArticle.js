import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
	return (
		<div>
			<p>{props.img}</p>
			<h2>{props.headline}</h2>
			<p>{props.description}</p>
			<p>{props.url}</p>
		</div>
	)
}

export default NewsArticle;