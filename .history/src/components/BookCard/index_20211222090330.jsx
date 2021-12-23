export function Bookcard(props) {
    const { bookData } = props;
    const img = bookData.imageUrl ? (<img src={bookData.imageUrl} alt="Book Cover"></img>) : {};
    const title = bookData.title ? (<h1>{bookData.title}</h1>) : {};
    const author = bookData.author ? (<p className="author">{bookData.author}</p>) : {};
    const description = bookData.description ? (<p className="description">{bookData.description}</p>) : {};
    const categories = bookData.categories ? (
        bookData.categories.map((category) => {
            return (<span className="category">{category} </span>)
        })
    ) : {};
    return (
        <div data-id={bookData._id} className="book-card">
            <div className="book-image">
                {img}
            </div>
            <div className="book-info">
                {title}
                {author}
                {description}
                {categories}
            </div>
            <div><button><a href='/books/bookData._id'>Details</a></button></div>
        </div>
    )
}