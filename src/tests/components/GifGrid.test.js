import React from 'react';
import '@testing-library/jest-dom';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { shallow } = require('enzyme');
jest.mock('../hooks/useFetchGifs');

describe('<GifGrid testing>', () => {
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });
  const wrapper = shallow(<GiftGrid category={'Batman'} />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show category in the h3', () => {
    const subtitle = wrapper.find('h3');
    expect(subtitle.text().trim()).toBe('Batman');
  });

  test('should show items when images are loaded with useFetch', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/image.png',
        title: 'Prueba de imagen',
      },
      {
        id: 'abc123',
        url: 'https://localhost/image.png',
        title: 'Prueba de imagen',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GiftGrid category={'Batman'} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('li').length).toBe(gifs.length);
  });
});
