const { getGifs } = require('../../helper/getGifs');

describe('getGifs fetch testing', () => {
  test('should get elements', async () => {
    const gifs = await getGifs('Marvel');
    expect(gifs.length > 0).toBe(true);
  });

  test('should empty array', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
