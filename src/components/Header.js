import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

    return (
        <header>
            <nav>
                <div className="nav-wrapper #ff8f00 amber darken-3">
                    <Link to="/" className="brand-logo center">BIT Persons</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/about/"><i className="fas fa-info"></i></Link></li>
                        <li><a href="#" onClick={props.refresh}><i className="fas fa-redo-alt"></i></a></li>
                        <li><a href="#" onClick={props.onClick}><i className={props.className}></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header