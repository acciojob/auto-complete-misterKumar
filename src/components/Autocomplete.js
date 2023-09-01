import React, { useState } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function Autocomplete() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the suggestions based on the input value
    const filteredSuggestions = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the input value to the clicked suggestion
    setInputValue(suggestion);
    // Clear the suggestions
    setSuggestions([]);
  };

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <input
        type="text"
        placeholder="Type a fruit name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
