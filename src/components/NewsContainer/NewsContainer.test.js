import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import health from '../../data/health';

describe('NewsContainer', () => {
	const mockFilterArticles = jest.fn();
	const wrapper = shallow(<NewsContainer news={health}/>);

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})
})