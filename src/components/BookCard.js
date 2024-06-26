import React, { useState } from 'react';
import './BookCard.css';

const BookCard = ({ book, onAdd }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAdd(book);
    setIsAdded(true);
  };

  return (
    <div className="book-card">
      <h3><strong>Book Title:</strong> {book.title}</h3>
      <p><strong>Edition Count:</strong> {book.edition_count}</p>
      {onAdd && (
        <button 
          onClick={handleAdd} 
          className={isAdded ? 'added' : ''}
          disabled={isAdded}
        >
          {isAdded ? 'Added' : 'Add to Bookshelf'}
        </button>
      )}
    </div>
  );
};

export default BookCard;
