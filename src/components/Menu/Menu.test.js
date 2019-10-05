import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
	const mockFilterArticles = jest.fn();
	const wrapper = shallow(<Menu filterArticles={mockFilterArticles}/>);

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('should invoke filterArticles when a button is clicked', () => {
			wrapper.find('button').at(0).simulate('click');
			expect(mockFilterArticles).toHaveBeenCalledWith('local');
	})
})