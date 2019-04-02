import React from 'react'

const searchBar = (props) => {
    return (
        <nav className="container" id="searchBar">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" onChange={props.searchHandler} />
                        <label className="label-icon" ><i className="fas fa-search"></i></label>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default searchBar