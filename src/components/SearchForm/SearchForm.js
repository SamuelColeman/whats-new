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
			<form autoComplete="off">
				<input onChange={this.updateSearch} 
					type="text"
					name="search"
					value={this.state.search}
					placeholder="Search for news article here."/>
				<button className="searchBtn" type="submit" onClick={this.handleChange} onSubmit={this.handleChange}>Search Now
				</button>
			</form>
		)
	}
}

export default SearchForm;