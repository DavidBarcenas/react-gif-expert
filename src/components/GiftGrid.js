import React, { useState, useEffect } from 'react';

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifts();
  }, []);

  const getGifts = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Irom+Man&api_key=8RxFYU11Hi6cCjYEJuQipJJ9965BaHUT';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_large.url,
      };
    });

    // console.log(gifs);
    setImages(gifs);
  };

  // getGifts();
  return (
    <div>
      <h3>{category}</h3>
      <ul className="Gifs__list">
        {images.map((img) => (
          <li key={img.id}>
            <img src={img.url} alt={img.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
