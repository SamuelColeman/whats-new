import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = { search: ''}
	}

	handleChange = () => {
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
				<button onClick={this.handleChange} type="button">Search
				</button>
			</form>
		)
	}
}

export default SearchForm;