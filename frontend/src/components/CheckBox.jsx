import React, { useContext } from 'react';  // Import React and useContext
import { DataContext } from '../App';

const CheckBox = ({label, checked, onChange}) => {
  // console.log(item)

  const printCheck = (e) => {
    // console.log(e.target.checked);
    onChange(e.target.label);
  };

  return (
    <div className="flex space-x-3 items-center">
      <input
        type="checkbox"
        value={label}
        onChange={printCheck}
        className="outline-none"
      />
      <label htmlFor={label}>{label}</label>  {/* Changed 'span' to 'label' */}
    </div>
  );
};

export default CheckBox;
