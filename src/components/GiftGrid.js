import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helper/getGifs';

export const GiftGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data, loading } = useFetchGifs();
  console.log('state::', data, loading);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  // getGifts();
  return (
    <div>
      <h3>{category}</h3>
      {loading ? 'Cargando...' : 'Data Cargada'}
      {/* <ul className="Gifs__list">
        {images.map((img) => (
          <li key={img.id}>
            <img src={img.url} alt={img.title} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};
