import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
	return (
		<div>
			<h2>{props.headline}</h2>
			<p>{props.description}</p>
		</div>
	)
}

export default NewsArticle;