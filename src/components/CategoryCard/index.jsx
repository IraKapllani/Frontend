import {CategoriesAuth} from '../CategoriesAuth';

export function Categorycard(props) {

    const {categoryData } = props;
    const name = categoryData.name ? (<h1>{categoryData.name}</h1>) : {};
    return (
         <div className="col-12 col-md-6 col-lg-4" data-id={categoryData._id}>
            <div className="author-data">
               {name}
               <CategoriesAuth id={categoryData._id} />
            </div>
        </div>
        
    )
}