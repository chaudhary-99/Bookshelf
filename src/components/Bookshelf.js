import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ books, onRemove }) => (
  <div className="bookshelf">
    {books.map(book => (
      <div key={book.key} className="book-card">
        <h3><strong>Book Title:</strong> {book.title}</h3>
        <p><strong>Edition Count:</strong> {book.edition_count}</p>
        <button className="remove-button" onClick={() => onRemove(book.key)}>Remove</button>
      </div>
    ))}
  </div>
);

export default Bookshelf;
