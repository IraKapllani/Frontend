import axios from "axios";
import { useEffect, useState } from "react";
import { Categorycard } from "../../components/CategoryCard";

export default function Categories() {

      const [categories, setCategories] = useState([]);
      useEffect(() => {
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
      }, []);
      return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Categories</h2>
          <div className="row">
          {categories.map((category) => <Categorycard key={category._id} categoryData={category}/>)}
          </div>
        </main>
      );
    }
