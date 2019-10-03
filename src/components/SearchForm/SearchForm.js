import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	constructor() {
		super();
		this.state = { search: ''}
	}

	render() {
		return (
			<form>
				<input 
					type="text"
					placeholder="Article"/>
				<button type="button">Search
				</button>
			</form>
		)
	}
}

export default SearchForm;