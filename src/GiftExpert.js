import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GiftExpert = () => {
  const [categories, setCategories] = useState([
    'Spiderman',
    'Iron-man',
    'Captain America',
  ]);

  // const handleAdd = () => {
  //   setCategories([...categories, 'Batman']);
  // };

  return (
    <div>
      <h2>GiftExpert</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ul>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default GiftExpert;
