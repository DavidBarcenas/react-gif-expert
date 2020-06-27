import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpert = () => {
  const [categories, setCategories] = useState(['Spiderman']);

  // const handleAdd = () => {
  //   setCategories([...categories, 'Batman']);
  // };

  return (
    <div>
      <h2>GiftExpert</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      {categories.map((c) => (
        <GiftGrid key={c} category={c} />
      ))}
    </div>
  );
};

export default GiftExpert;
