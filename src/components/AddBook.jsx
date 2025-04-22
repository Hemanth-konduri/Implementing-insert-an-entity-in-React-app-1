// src/components/AddBook.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBook.css'; // Assuming you have some CSS for styling

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book submitted! (no actual functionality yet)");
    navigate('/');
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <textarea placeholder="Description" required />
        <input type="url" placeholder="Cover Image URL" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
