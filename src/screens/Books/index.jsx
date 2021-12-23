import axios from "axios";
import { useEffect, useState } from "react";
import { Bookcard } from "../../components/BookCard";


export default function Books() {
  const [books, setBooks] = useState([]);
  // const url = auth() ? 'http://localhost:3001/admin/books' : 'http://localhost:3001/books';
  useEffect(() => {
    axios.get('http://localhost:3001/books')
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data.books;
      })
      .then((books) => {
        console.log(books);
        setBooks(books);
      });
  }, []);
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Books</h2>
      <div className="container-fluid">
        <div className="row">
        {books.map((book) => <div className="col-12 col-lg-6"><Bookcard key={book._id} bookData={book} /></div>)}
        </div>
      </div>
    </main>
  );
}