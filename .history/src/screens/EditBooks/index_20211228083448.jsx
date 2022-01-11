import Select from 'react-select';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';






export default function EditBook(props) {
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [book, setBook] = useState({});
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  const navigate = useNavigate();

  const [token, setToken] = useState();
  useEffect(() => {
    let token = localStorage.getItem('token');
    setToken(token);
  }, []);

  function fillFields(data) {
    for (const [key, value] of Object.entries(data)) {
      if (key === "_id" || key === "imageUrl" || key === "__v") continue;
      let input = document.querySelector(`input[name="${key}"]`);
      if (input) {
        input.value = value;
      } else {
        let input = document.querySelector(`textarea[name="${key}"]`);
        if (input) {
          input.value = value;
        }
      }
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3001/authors')
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data.authors;
      })
      .then((authors) => {
        setAuthors(authors);
      });


    axios.get('http://localhost:3001/categories')
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.data.categories;
      })
      .then((categories) => {
        setCategories(categories);
      });

    axios.get(`http://localhost:3001/books/${id}`)
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        console.log(res);
        return res.data.book;
      })
      .then((book) => {
        console.log(book);
        fillFields(book)
      });
  }, []);


  let optionsAuthor = authors.map(function (author) {
    return { value: author.name, label: author.name };
  })


  let optionsCategories = categories.map(function (category) {
    return { value: category.name, label: category.name };
  })

  var category = [];
  function handleCategoryChange() {
    setTimeout(() => {
      let elements = document.querySelectorAll('input[name="categories"');
      let values = [];
      elements.forEach((el, i) => {
        values.push(el.value);
      })
      category = values;
      console.log(category);
    }, 200);
  }
  function submitEditBooks(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const title = form.querySelector('input[name="title"]');
    const author = form.querySelector('input[name="author"]');
    const description = form.querySelector('textarea[name="description"]');
    const img = form.querySelector('input[type="file"]');
    const data = new FormData();
    data.append("title", title.value);
    data.append("author", author.value);
    data.append("description", description.value);
    if (img.files[0])
      data.append("image", img.files[0]);
    data.append("category", category);
    axios.put(`http://localhost:3001/admin/edit-books/`+id, data,
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
        navigate('/admin/books', { replace: true });
      });
  }



  return (

    <main >
      <form onSubmit={submitEditBooks} action="">
        <div className="add-materials">
          <h1>Edit Book</h1>
          <input className="input-type-text" type="text" name="title"></input>
          <Select className="input-type-select" name="author" options={optionsAuthor} />
          <textarea className="input-type-text" name="description"></textarea>
          <Select className="input-type-select" isMulti name="categories" options={optionsCategories} />
          <input type="file"></input>
        </div>
        <div className="button-submit">
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  );
}