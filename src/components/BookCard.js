import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAdd }) => (
  <div className="book-card">
    <h3><strong>Book Title:</strong> {book.title}</h3>
    <p><strong>Edition Count:</strong> {book.edition_count}</p>
    {onAdd && <button onClick={() => onAdd(book)}>Add to Bookshelf</button>}
  </div>
);

export default BookCard;
