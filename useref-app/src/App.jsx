
import React, { useRef, useEffect } from 'react';
import UncontrolledInput from './UncontrolledInput.jsx'; 
import InteractiveElement from './InteractiveElement.jsx';
import './App.css';

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
      <UncontrolledInput /> 
      <InteractiveElement/>
    </div>
  );
};

export default App;

