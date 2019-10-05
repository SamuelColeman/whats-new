import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import health from '../../data/health';

describe('App', () => {
	const mockCategory = { healthArticle: 'health' };
	const mockInput = { input: 'infection' };
	const	wrapper = shallow(<App />);

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('should be able to update state when filterArticles is invoked', () => {
		wrapper.instance().filterArticles(mockCategory.healthArticle)
		expect(wrapper.state()).toEqual({ news: health })
	})

	it('should be able to update state when searchArticles is invoked', () => {
		wrapper.instance().searchArticles(mockInput.input)
		expect(wrapper.state()).toEqual({ news: [{
		    id: 1,
		    headline: 'Man dies after getting infection linked to shellfish, North Carolina officials say',
		    img: 'https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS',
		    description: 'A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.',
		    url: 'https://www.bnd.com/news/nation-world/national/article235549897.html'
  		}]
		})
	})
})
