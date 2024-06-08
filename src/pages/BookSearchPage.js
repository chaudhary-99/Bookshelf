import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import './BookSearchPage.css';

const BookSearchPage = ({ onAddBook }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async (query) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1`);
    setResults(response.data.docs);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchBooks(e.target.value);
  };

  return (
    <div className="book-search-page">
      <h2>Search by book name:</h2>
      <input type="text" value={query} onChange={handleChange} placeholder="Enter book title" />
      <div className="results">
        {results.map(book => (
          <BookCard key={book.key} book={book} onAdd={onAddBook} />
        ))}
      </div>
      <button className="bookshelf-button" onClick={() => window.location.href='/bookshelf'}>My Bookshelf</button>
    </div>
  );
};

export default BookSearchPage;
