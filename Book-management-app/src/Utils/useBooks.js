import React, { useEffect, useState } from 'react';

export function useBooks() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://books-backend-0qxz.onrender.com/api/getAllBooks')
      .then(response => response.json())
      .then(data => setBooks(data.Books))
      .catch(error => console.error('Error:', error));
  }, []);
return Books;
 
}


