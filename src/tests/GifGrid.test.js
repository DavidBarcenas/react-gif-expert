import React from 'react';
import { GiftGrid } from '../components/GiftGrid';
const { shallow } = require('enzyme');

describe('<GifGrid testing>', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<GiftGrid />);

    expect(wrapper).toMatchSnapshot();
  });
});
