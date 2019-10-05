import React from 'react';
import { shallow } from 'enzyme'
import SearchForm from './SearchForm';

describe('SearchForm', () => {
	const mockSearchArticles = jest.fn();
	const mockEvent = {target: {name: 'search', value: 'infection'}};
	const wrapper = shallow(<SearchForm searchArticles={mockSearchArticles} />)

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should invoke searchArticles when handleChange is called', () => {
		const mockEvent = { preventDefault: jest.fn() };
		wrapper.instance().handleChange(mockEvent);
		expect(mockSearchArticles).toHaveBeenCalledWith(wrapper.state('search'))
	});

	it ('should update state when updateSearch is invoked', () => {
		wrapper.instance().updateSearch(mockEvent);
		expect(wrapper.state('search')).toEqual(mockEvent.target.value);
	});

	it('should invoke updateSearch when the input value is changed', () => {
		wrapper.instance().updateSearch = jest.fn();
		wrapper.instance().forceUpdate();
		wrapper.find('input').simulate('change', mockEvent);
		expect(wrapper.instance().updateSearch).toHaveBeenCalledWith(mockEvent);
	})

	it('should invoke handleChange when the button is clicked', () => {
		wrapper.instance().handleChange = jest.fn();
		wrapper.instance().forceUpdate();
		wrapper.find('button').simulate('click', mockEvent);
		expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
	})
})  