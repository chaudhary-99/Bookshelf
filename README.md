# React Book Search and Bookshelf Application

## Overview

This project is a React application that allows users to search for books using the Open Library API and add their favorite books to a bookshelf. The application is built with React and utilizes local storage to save the user's bookshelf.

## Features

- *Book Search*: Search for books by title using the Open Library API.
- *Bookshelf*: Add books to your personal bookshelf and remove them as needed.
- *Local Storage*: Persist your bookshelf data using the browser's local storage.
- *Responsive Design*: Optimized for both desktop and mobile views.

## Demo

[Live Demo](#) - (Replace with the actual link to your live demo)

## Screenshots

### Home Page
![Home Page](#) - (Replace with the actual link to your screenshot)

### Bookshelf Page
![Bookshelf Page](#) - (Replace with the actual link to your screenshot)

## Installation

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Steps

1. *Clone the repository*:
    bash
    git clone https://github.com/your-username/react-book-search-bookshelf.git
    cd react-book-search-bookshelf
    

2. *Install dependencies*:
    bash
    npm install
    # or
    yarn install
    

3. *Start the development server*:
    bash
    npm start
    # or
    yarn start
    

4. *Open your browser* and navigate to:
    
    http://localhost:3000
    

## Project Structure

- *src/*
  - *components/*
    - BookCard.js
    - Bookshelf.js
  - *pages/*
    - BookSearchPage.js
    - BookshelfPage.js
  - App.js
  - index.js
  - App.css
  - BookSearchPage.css
  - BookshelfPage.css
  - BookCard.css
  - Bookshelf.css

## Usage

### Searching for Books

1. On the home page, type a book title into the search input.
2. The results will automatically display below the input field.
3. Click "Add to Bookshelf" to save a book to your bookshelf.

### Managing Your Bookshelf

1. Navigate to the bookshelf page by clicking the "My Bookshelf" button.
2. View all books you have added.
3. Click "Remove" to delete a book from your bookshelf.
4. Click "Back to Search" to return to the search page.