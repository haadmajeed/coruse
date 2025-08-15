import React from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div >
      <h1>Hello, {name || 'Guest'}!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
