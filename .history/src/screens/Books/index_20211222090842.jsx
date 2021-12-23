import axios from "axios";
import { useEffect, useState } from "react";
import { Bookcard } from "../../components/BookCard";

export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      const bookId = this.props.match.params.id;
      console.log(bookId);
      axios.get('http://localhost:3001/books')
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
        {books.map((book) => <Bookcard key={book._id} bookData={book}/>)}
      </main>
    );
  }