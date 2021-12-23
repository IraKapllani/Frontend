import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function AuthorAuth(props) {
    const [auth, setAuth] = useState(false);
    const { id } = props;
    const [token, setToken] = useState();
    useEffect(() => { 
        let token = localStorage.getItem('token');
        setToken(token);
        token ? setAuth(true) : setAuth(false);
        console.log(id);
    }, []);


      async function deleteDataById() {
        if (id) {
          try {
           await axios.delete(`http://localhost:3001/admin/authors/${id}`, {
             headers: {
              'Authorization': `token ${token}`
             }
           })
           .then((res) => {
            window.location.reload();
           });
          } catch (err) {
            console.log(err);
          }
        }
      }
      

    if(auth) {
        return(
            <div className="mt-3">
                 <button onClick={() => {deleteDataById()}} type="button">Delete</button>
            </div>
        );
    }
    else{
        return null;
    }
}