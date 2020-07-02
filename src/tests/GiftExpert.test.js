import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GiftExpert from '../GiftExpert';
import { GiftGrid } from '../components/GiftGrid';

describe('<GifExpert /> testing', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<GiftExpert />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    const categories = ['SpiderMan', 'Iron-Man'];
    const wrapper = shallow(<GiftExpert dafultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GiftGrid').length).toBe(categories.length);
  });
});
