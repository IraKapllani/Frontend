import axios from "axios";
import { useEffect, useState } from "react";


export default function BookDetails() {
    const [book, setBook] = useState([]);
    // useEffect((props) => {
    // const bookId = props.match.params.bookId;
    // console.log(bookId);
    // const url = 'http://localhost:3001/books/';
    //   axios.get(url + '61bf586213ee99882eaeb05f')
    //   .then(res => {
    //     if (res.status !== 200 && res.status !== 201) {
    //       console.log('Error!');
    //       throw new Error('Could not authenticate you!');
    //     }
    //     return res.data.book;
    //   })
    //   .then((book) => {
    //     setBook(book);
    //     console.log(book);
    //   });
    // }, []);


    const img = book.imageUrl ? (<img src={book.imageUrl} alt="Book Cover"></img>) : "";
    const title = book.title ? (<h1>{book.title}</h1>) : "";
    const author = book.author ? (<p className="author">{book.author}</p>) :"";
    const description = book.description ? (<p className="description">{book.description}</p>) : "";
    const categories = book.categories ? (
        book.categories.map((category) => {
            return (<span className="category">{category} </span>)
        })
    ) : "";

    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Book</h2>
        <div className="book-image">
                {img}
            </div>
            <div className="book-info">
                {title}
                {author}
                {description}
                {categories}
            </div>
            <div></div>
      </main>
    );
  }