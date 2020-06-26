import React, { useState } from 'react';

const GiftExpert = () => {
  const [categories, setCategories] = useState([
    'Spiderman',
    'Iron-man',
    'Captain America',
  ]);

  const handleAdd = () => {
    setCategories([...categories, 'Batman']);
  };

  return (
    <div>
      <h2>GiftExpert</h2>
      <hr />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default GiftExpert;
