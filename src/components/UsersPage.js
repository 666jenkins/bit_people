import React from 'react'

const UsersPage = (props) => {

    function ListItem (obj) {
        const item =
        <li className="collection-item avatar">
            <img src={obj.props.picture} alt="" className="circle"></img>
            <span className="title"><b>{obj.props.name} {obj.props.surname}</b></span>
            <p><i className="fas fa-envelope">&nbsp; </i>{obj.props.email}</p>
            <p><i className="fas fa-birthday-cake">&nbsp; </i>{obj.props.dob}</p>
        </li>
    
        return item
    }

    const users = props.users;
    const listItems = users.map(user => <ListItem key={user.id} props={user} />)

    return (
        <ul className="collection container">
            {listItems}
        </ul>
    )

}


export default UsersPage