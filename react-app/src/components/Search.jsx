import React from 'react'
 import React, { useState } from 'react';
function Search() {

    
     

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) return;  // don't search empty

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li> // Adjust to your data shape
        ))}
      </ul>
    </div>
  )
}
  
}

 

export default Search

