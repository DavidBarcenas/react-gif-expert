import React from 'react';
const { shallow } = require('enzyme');
import { AddCategory } from '../components/AddCategory';

describe('AddCategory testing', () => {
  const setCategorys = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategorys} />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change input value', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  });
});
