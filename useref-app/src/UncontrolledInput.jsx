// UncontrolledInput.js
import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className='input'> 
      <input ref={inputRef} onChange={handleInputChange} />
    </div>
  );
};

export default UncontrolledInput;
