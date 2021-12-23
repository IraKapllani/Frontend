import axios from "axios";
import { useEffect, useState } from "react";

export default function Books() {
    const [books, setBooks] = useState();
    useEffect(() => {
      axios.get('http://localhost:3001/')
      .then((response) => {
        setBooks({books: response.data.books});
      });
    });

    // useState(books).map(books => {
    //    console.log(books.name);
    // });
    return (
      
      <main style={{ padding: "1rem 0" }}>
        {books.map(book => <h2>{book.name}</h2>)}
        <h2>Books</h2>
      </main>
    );
  }