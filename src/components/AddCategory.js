import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [value, setValue] = useState('');

  const handleValueChange = (e) => setValue(e.target.value);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      // setCategories((cats) => [...cats, value]);
      setCategories((cats) => [value]);
      setValue('');
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleValueChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
