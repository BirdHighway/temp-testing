import React from 'react';
import CheckboxWithLabel from './CheckboxWithLabel';
import Nothing from './Nothing';

const App = () => {
  return (
    <div>
      <h1>Testing App</h1>
      <CheckboxWithLabel
        checkedText='The box is checked'
        notCheckedText='The box is NOT checked'/>
      <Nothing />
    </div>
  );
};

export default App;
