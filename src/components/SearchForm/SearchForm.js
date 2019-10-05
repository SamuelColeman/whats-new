import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = { search: ''}
	}

	handleChange = event => {
		event.preventDefault();
		this.props.searchArticles(this.state.search);
	}

	updateSearch = event => {
		this.setState({ [event.target.name]: event.target.value})
	}

	render() {
		return (
			<form>
				<input onChange={this.updateSearch} 
					type="text"
					name="search"
					value={this.state.search}
					placeholder="Article"/>
				<button type="submit" onClick={this.handleChange} onSubmit={this.handleChange}>Search
				</button>
			</form>
		)
	}
}

export default SearchForm;