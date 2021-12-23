import { Link } from "react-router-dom";
import { withRouter } from "react-router"
import BookDetails from "../../screens/BookDetails";

export function BookcardAdmin(props) {
    const { bookData } = props;
    const img = bookData.imageUrl ? (<img src={bookData.imageUrl} alt="Book Cover"></img>) : {};
    const title = bookData.title ? bookData.title : {};
    const author = bookData.author ? (<p className="author">{bookData.author}</p>) : {};
    const description = bookData.description ? bookData.description : {};
    const categories = bookData.categories ? (
        bookData.categories.map((category) => {
            return (<p className="category">{category} </p>)
        })
    ) : {};

    return (
        <div data-id={bookData._id} >
            <div className="component"  data-id={bookData._id}>
     <ul className="align">
  
       <li>
      <figure className='book'>        
       
        <ul className='hardcover_front'>
          <li>
          <img src={bookData.imageUrl} alt="Book Cover" width="100%" height="100%"></img>
            <span className="ribbon bestseller">Nº1</span>
          </li>
          <li></li>
        </ul>        
          
        <ul className='page'>
          <li></li>
          <li>
          {/* <button className="btn"><Link to={'/books/' + bookData._id} >Details</Link></button> */}
              <button className="btn">Delete</button>
              <button className="btn">Edit</button>
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
          <div>{categories}</div>
        </figcaption>
      </figure>
    </li>  
  </ul>
        </div>
           
        </div>
    )
}