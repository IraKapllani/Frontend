import { BsFillPersonFill } from "react-icons/bs";
import {AuthorAuth} from '../AuthorAuth';

export function Authorcard(props) {
    const {authorData } = props;
    const name = authorData.name ? (<h3>{authorData.name}</h3>) : {};
    const bio = authorData.bio ? (<p>{authorData.bio}</p>) : {};
    return (
        <div className="col-12 col-md-6 col-lg-4" data-id={authorData._id}>
            <div className="author-data">
                <BsFillPersonFill/>
               {name}
               {bio}
               <AuthorAuth id={authorData._id} />
            </div>
            
        </div>
    )
}