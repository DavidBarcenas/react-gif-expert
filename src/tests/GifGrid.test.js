import React from 'react';
import { GiftGrid } from '../components/GiftGrid';
const { shallow } = require('enzyme');

describe('<GifGrid testing>', () => {
  const wrapper = shallow(<GiftGrid category={'Batman'} />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show category in the h3', () => {
    const subtitle = wrapper.find('h3');
    expect(subtitle.text().trim()).toBe('Batman');
  });
});
