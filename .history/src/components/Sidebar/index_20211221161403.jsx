import { useState } from "react";
import { Link } from "react-router-dom";
import { Textinput } from "../TextInput";

export function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <aside id="sidebar" className={open ? "" : "collapsed"}>
            <section className="head">
                <div className="title">Library App</div>
                <button onClick={() => {setOpen(!open)}} className="close">
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
                    <li><Link onClick={() => {setOpen(!open)}} to="/">Home</Link></li>
                    <li><Link onClick={() => {setOpen(!open)}} to="/books">Books</Link></li>
                    <li><Link onClick={() => {setOpen(!open)}} to="/authors">Books</Link></li>
                    <li><Link onClick={() => {setOpen(!open)}} to="/categories">Books</Link></li>
                    <li><Link onClick={() => {setOpen(!open)}} to="/add-authors">Add Authors</Link></li>
                </ul>
            </section>
        </aside>
    );
  }
