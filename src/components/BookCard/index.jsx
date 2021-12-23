import {BookAuth} from '../BookAuth';
import { useEffect, useState } from "react";

export function Bookcard(props) {
    const { bookData } = props;
    const [token, setToken] = useState();
    useEffect(() => { 
        let token = localStorage.getItem('token');
        setToken(token);
    }, []);
    const title = bookData.title ? bookData.title : {};
    const author = bookData.author ? (<p className="author">{bookData.author}</p>) : {};
    const description = bookData.description ? bookData.description : {};
    const categories = bookData.categories ? (
        bookData.categories.map((category) => {
            return (<div><p className="category">{category} </p></div>)
        })
    ) : {};
    console.log(bookData.categories);
    return (
        <div data-id={bookData._id} >
            <div className="component"  data-id={bookData._id}>
     <ul className="align">
  
       <li>
      <figure className='book'>        
       
        <ul className='hardcover_front'>
          <li>
          <img src={'http://localhost:3001/'+bookData.imageUrl} alt="Book Cover" width="100%" height="100%"></img>
          </li>
          <li></li>
        </ul>        
          
        <ul className='page'>
          <li></li>
          <li>
          <BookAuth id={bookData._id} />
          {/*           <div className="btn">
            {auth() ? (<>{editBook}{deleteBook}</>) : (<Link to={'/books/' + bookData._id} >Details</Link>)}
          </div> */}
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>        
        
        <ul className='hardcover_back'>
          <li></li>
          <li></li>
        </ul>
        <ul className='book_spine'>
          <li></li>
          <li></li>
        </ul>
        <figcaption>
          <h1>{title}</h1>
          <h3>By {author}</h3>
          <p className="description">{description}</p>
          {categories}
        </figcaption>
      </figure>
    </li>  
  </ul>
        </div>
           
        </div>
    )
}