import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Textinput } from "../TextInput";

export function Sidebar(props) {
    const { auth, logout } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const routes = auth() ? (
        <>
            <li><Link onClick={() => { setOpen(!open) }} to="/admin/books">Books</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/admin/authors">Authors</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/admin/categories">Categories</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/admin/add-books">Add Books</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/admin/add-authors">Add Authors</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/admin/add-categories">Add Categories</Link></li>
        </>
    ) : (
        <>
            <li><Link onClick={() => { setOpen(!open) }} to="/">Home</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/books">Books</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/authors">Authors</Link></li>
            <li><Link onClick={() => { setOpen(!open) }} to="/categories">Categories</Link></li>
        </>
    );
    const [open, setOpen] = useState(false);
    if(location.pathname === "/" || location.pathname === "/login") {
        return (<></>);
    }
    const logoutButton = auth() ? (<button style={{"margin":"2rem"}} onClick={() => {logout()}}>Log out!</button>) : (<></>);
    return (
        <aside id="sidebar" className={open ? "" : "collapsed"}>
            <section className="head">
                <div className="title">Library App</div>
                <button onClick={() => { setOpen(!open) }} className="close">
                    <div className="burger-container">
                        <div id="burger">
                            <div className="bar topBar"></div>
                            <div className="bar btmBar"></div>
                        </div>
                    </div>
                </button>
            </section>
            <section className="content">
                <ul>
                    {routes}
                </ul>
                {logoutButton}
            </section>
        </aside>
    );
}
