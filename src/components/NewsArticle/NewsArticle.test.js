import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<NewsArticle
			img='https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg'
			headline='Pugs Take Over'
			description='Pugsly wins presidential race.'
			url='https://en.wikipedia.org/wiki/Pug'
			/>)
		expect(wrapper).toMatchSnapshot();
	})
})