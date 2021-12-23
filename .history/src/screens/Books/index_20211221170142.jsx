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

  const books1 = [useState(books)];

  books1.map(book => {
       console.log(book.name);
    });

    return (
      
      <main style={{ padding: "1rem 0" }}>
        <h2>Books</h2>
      </main>
    );
  }