import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';
import './BookshelfPage.css';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(storedBooks);
  }, []);

  const removeBook = (key) => {
    const updatedBooks = books.filter(book => book.key !== key);
    setBooks(updatedBooks);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };

  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      <Bookshelf books={books} onRemove={removeBook} />
      <button className="back-button" onClick={() => window.location.href='/'}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
