// InteractiveElement.js
import React, { useRef } from 'react';

const InteractiveElement = () => {
  const divRef = useRef(null);

  const changeColor = () => {
    divRef.current.style.backgroundColor = 'red';
  };

  return (
    <div  className ="box"ref={divRef} onClick={changeColor} style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
      Click and change color
    </div>
  );
};

export default InteractiveElement;
