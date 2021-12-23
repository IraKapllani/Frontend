import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function BookAuth(props){
    const [auth, setAuth] = useState(false);
    const { id } = props;
    const [token, setToken] = useState();
    const navigate = useNavigate();
    useEffect(() => { 
        let token = localStorage.getItem('token');
        setToken(token);
        token ? setAuth(true) : setAuth(false);
        console.log(id);
    }, []);



    // useEffect(() => {
    
    //     async function deletePost() {
    //         await axios.delete('https://localhost:3001/admin/books' + id);
    //     }
    
    //     deletePost();
    // }, [id]);


      async function deleteDataById() {
        if (id) {
          try {
           await axios.delete(`http://localhost:3001/admin/books/${id}`, {
             headers: {
              'Authorization': `token ${token}`
             }
           })
           .then((res) => {
             navigate(0, {replace: true});
           });
          } catch (err) {
            console.log(err);
          }
        }
      }
      

    if(auth) {
        return(
            <div className="mt-4">
                 <button onClick={() => {deleteDataById()}} type="button">Delete</button>
                
                <button type="button" className="mt-4"><Link to={'/admin/edit-books/' + id} >Edit</Link></button>
            </div>
        );
    }
    else{
        return(
            <div className="mt-4">
                 <button className="details"><Link to={'/books/' + id} >Details</Link></button>
            </div>
        );
    }
  
}