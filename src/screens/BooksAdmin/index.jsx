import axios from "axios";
import { useEffect, useState } from "react";
import { BookcardAdmin } from "../../components/BookAdminCard";


export default function BooksAdmin() {
    const [books, setBooks] = useState([]);
    // const url = auth() ? 'http://localhost:3001/admin/books' : 'http://localhost:3001/books';
    useEffect(() => {
      const token = localStorage.getItem('token');
      axios.get('http://localhost:3001/books', {
        headers: {
         'Authorization': `token ${token}`
        }
      })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data.books;
      })
      .then((books) => {
        setBooks(books);
      });
    }, []);
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Books</h2>
        {books.map((book) => <BookcardAdmin key={book._id} bookData={book}/>)}
      </main>
    );
  }