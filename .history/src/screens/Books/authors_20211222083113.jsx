import axios from "axios";
import { useEffect, useState } from "react";
import { Authorcard } from "../../components/AuthorCard";

export default function Authors() {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3001/authors')
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data.authors;
      })
      .then((authors) => {
        setBooks(authors);
      });
    }, []);
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Authors</h2>
        {authors.map((author) => <Authorcard key={author._id} authorData={author}/>)}
      </main>
    );
  }