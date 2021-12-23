import './theme/styles.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './screens/Home';
import Books from './screens/Books';
import Authors from './screens/Authors';
import Addauthors from './screens/AddAuthors';
import Bookdetails from './screens/BookDetails';
import { Login } from './screens/Login';
import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(undefined);
  }
  const main = (
    <div className="container">
    <BrowserRouter>
      <Sidebar />
      <button style={{"margin":"2rem"}} onClick={logOut}>Log out!</button>
      <div id='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="bookss" element={<Bookdetails />} />
          <Route path="authors" element={<Authors />} />
          <Route path="add-authors" element={<Addauthors />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>);
  const pullTokenFromLogin = (token) => {
    setToken(token);
  }
  const login = (<Login setAppToken={pullTokenFromLogin} />);
  if(!token) {
    return login;
  }
  
  return main;
}


export default App;
