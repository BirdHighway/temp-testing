import React, { useState } from 'react';

const CheckboxWithLabel = (props) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {isChecked ? props.checkedText : props.notCheckedText}
    </label>
  );

};

export default CheckboxWithLabel;
