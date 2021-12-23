import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCategories() {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('token');
    setToken(token);
  }, []);

  function submitAddAuthors(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector('input[name="name"]');
    const bio = form.querySelector('textarea[name="bio"]');
    const data = new FormData();
    data.append('name', name.value);
    data.append('bio', bio.value);

    axios.post("http://localhost:3001/admin/add-authors", data,
      {
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data;
      }).then(response => {
        navigate('/admin/authors', { replace: true });
      });
  }


  return (
    <main >
      <form onSubmit={submitAddAuthors} action="">
        <div className="add-materials row">
          <h1>Add Author</h1>
          <div className="col-12">
            <input className="input-type-text" placeholder="Type author's name" type="text" name="name"></input>
          </div>
          <div className="col-12">
            <textarea className="input-type-text" id='bio' placeholder="Type author's bio" name="bio"></textarea>
          </div>
        </div>
        <div className="button-submit">
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  );
}