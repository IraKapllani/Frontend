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

  function submitAddCategories(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector('input[name="name"]');
    const data = new FormData();
    data.append('name', name.value);

    axios.post("http://localhost:3001/admin/add-categories", data,
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
        navigate('/admin/categories', { replace: true });
      });
  }

  return (

    <main >
      <form onSubmit={submitAddCategories} action="">
        <div className="add-materials">
          <h1>Add Category</h1>
          <input className="input-type-text" type="text" name="name"></input>
        </div>
        <div className="button-submit">
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  );
}