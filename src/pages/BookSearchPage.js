import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import './BookSearchPage.css';

const BookSearchPage = ({ onAddBook }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
        setResults(response.data.docs);
      } catch (error) {
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="book-search-page">
      <h2>Search by book name:</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Enter book title"
      />
      <div className="results">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          results.map(book => (
            <BookCard key={book.key} book={book} onAdd={onAddBook} />
          ))
        )}
      </div>
      <button
        className="bookshelf-button"
        onClick={() => window.location.href='/bookshelf'}
      >
        My Bookshelf
      </button>
    </div>
  );
};

export default BookSearchPage;
