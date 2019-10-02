import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
	return (
		<div>
			<img src={props.img}></img>
			<h2>{props.headline}</h2>
			<p>{props.description}</p>
			<a href={props.url}>Full Article</a>
		</div>
	)
}

export default NewsArticle;