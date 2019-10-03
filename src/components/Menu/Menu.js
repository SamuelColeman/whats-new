import React, { Component } from 'react';
import './Menu.css'

const Menu = props => {
	return (
		<>
			<button onClick={() => props.filterArticles('local')} type="button">Local News</button>
	    <button onClick={() => props.filterArticles('technology')} type="button">Technology</button>
	    <button onClick={() => props.filterArticles('entertainment')} type="button">Entertainment</button>
	    <button onClick={() => props.filterArticles('science')} type="button">Science</button>
	    <button onClick={() => props.filterArticles('health')} type="button">Health</button>
	  </>
	)
}


export default Menu;