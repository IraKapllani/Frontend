export function Authorcard(props) {
    const {authorData } = props;
    const name = authorData.name ? (<h1>{authorData.name}</h1>) : {};
    const bio = authorData.bio ? (<h1>{authorData.bio}</h1>) : {};
    return (
        <div data-id={authorData._id} className="book-card">
            <div className="book-info">
                {name}
                {bio}
            </div>
        </div>
    )
}