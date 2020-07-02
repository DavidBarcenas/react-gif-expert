import '@testing-library/jest-dom';
const { useFetchGifs } = require('../../hooks/useFetchGifs');
const { renderHook } = require('@testing-library/react-hooks');

describe('useFetchGifs testing ', () => {
  test('should return initalState', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Iron-Man')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return images array and loading false ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Iron-Man')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length > 0).toBeTruthy();
    expect(loading).toBeFalsy();
  });
});
