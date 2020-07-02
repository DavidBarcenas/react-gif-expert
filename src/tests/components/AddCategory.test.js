import '@testing-library/jest-dom';
import React from 'react';
const { shallow } = require('enzyme');
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory testing', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    // Se llama para limpiar la simulación de algo o un mock
    jest.clearAllMocks;
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change input value', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  });

  test('should not post the info ', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean text box ', () => {
    const value = 'Hola Mundo';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // expect(setCategories).toHaveBeenCalled(2);
    expect(input.prop('value')).toBe('');
  });
});
