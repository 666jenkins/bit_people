import React from "react";

const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">BIT Persons</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#" ><i className="fas fa-redo-alt"></i></a></li>
                    <li><a href="#" onClick={props.onClick}><i className={props.className}></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header