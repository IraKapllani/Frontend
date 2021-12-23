import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/styles.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './screens/Home';
import Books from './screens/Books';
import Authors from './screens/Authors';
import AddBooks from './screens/AddBooks';
import AddAuthors from './screens/AddAuthors';
import AddCategories from './screens/AddCategories';
import BookDetails from './screens/BookDetails';
import { Login } from './screens/Login';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import Categories from './screens/Categories';
import Protectedroute from './components/ProtectedRoute';
import EditBook from './screens/EditBooks';


function App() {
  
  const [token, setToken] = useState(localStorage.getItem('token'));
  const hasAuth = () => {
    return token ? true : false;
  }
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(undefined);
  }
  const pullLogout = () => {
    logOut();
  }
  const pullTokenFromLogin = (token) => {
    setToken(token);
  }
  const login = (<Login setAppToken={pullTokenFromLogin} />);
  const routing = (
    <div className="app-container">
    <BrowserRouter>
      <Sidebar logout={pullLogout} auth={hasAuth}/>
        <Routes>
          <Route auth={hasAuth} path="/" element={<Home />} />
          <Route auth={hasAuth} path="books" element={<Books />} />
          <Route auth={hasAuth} path="books/:bookId" element={<BookDetails />} />
          <Route auth={hasAuth} path="authors" element={<Authors />} />
          <Route auth={hasAuth} path="categories" element={<Categories />} />
          <Route auth={hasAuth} path="login" element={login} />
          <Route path="admin/books" element={
            <Protectedroute auth={hasAuth}>
              <Books />
            </Protectedroute>
          } />
          <Route path="admin/books/:bookId" element={
            <Protectedroute auth={hasAuth}>
              <BookDetails />
            </Protectedroute>
          } />
          <Route path="admin/authors" element={
            <Protectedroute auth={hasAuth}>
              <Authors />
            </Protectedroute>
          } />
          <Route path="admin/categories" element={
            <Protectedroute auth={hasAuth}>
              <Categories />
            </Protectedroute>
          } />
          <Route path="admin/add-books" element={
            <Protectedroute auth={hasAuth}>
              <AddBooks />
            </Protectedroute>
          } />
            <Route path="admin/add-authors" element={
            <Protectedroute auth={hasAuth}>
              <AddAuthors />
            </Protectedroute>
          } />
            <Route path="admin/add-categories" element={
            <Protectedroute auth={hasAuth}>
              <AddCategories />
            </Protectedroute>
          } />
          <Route path="admin/edit-books/:bookId" element={
            <Protectedroute auth={hasAuth}>
              <EditBook />
            </Protectedroute>
          } />
        </Routes>
    </BrowserRouter>
  </div>
  )
  return routing;
}

export default App;
