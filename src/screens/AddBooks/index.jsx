import Select from 'react-select';
import axios from "axios";
import { useEffect, useState } from "react";






export default function AddBooks(props) {

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState();
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
    let token = localStorage.getItem('token');
    setToken(token);
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
  function submitAddBooks(event) {
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
    if (img.files[0]) {
      data.append("image", img.files[0]);
    }
    for (let i = 0; i < category.length; i++) {
      data.append("categories[]", category[i]);
    }

    axios.post("http://localhost:3001/admin/add-books", data,
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
        return res;
      }).then(response => {
        window.location.href = '/admin/books';
      });
  }




  return (

    <main >
      <form onSubmit={submitAddBooks} action="">
        <div className="add-materials">
          <h1>Add Book</h1>
          <input className="input-type-text" type="text" placeholder="Type books's title" name="title"></input>
          <Select className="input-type-select" name="author" options={optionsAuthor} />
          <textarea className="input-type-text" placeholder="Type books's description" name="description"></textarea>
          <Select className="input-type-select" onChange={handleCategoryChange} isMulti name="categories" options={optionsCategories} />
          <input type="file"></input>

        </div>

        <div className="button-submit">
          <button type="submit">Add</button>
        </div>
      </form>
    </main>
  );
}