import React from 'react'

const UsersPageGrid = (props) => {

    function Card (obj) {
        const item =
        <li>
            <div className="col s4 m4 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={obj.props.pictureLarge} alt="" />
                        <span className="card-title"><b>{obj.props.name} {obj.props.surname}</b></span>
                    </div>
                    <div className="card-content">
                        <p><i className="fas fa-envelope">&nbsp; </i>{obj.props.email}</p>
                        <p><i className="fas fa-birthday-cake">&nbsp; </i>{obj.props.dob}</p>
                    </div>
                </div>
            </div>
        </li>
    
        return item
    }

    const users = props.users;
    const listItems = users.map(user => <Card key={user.id} props={user} />)

    return (
        <ul className="collection container row">
            {listItems}
        </ul>
    )

}


export default UsersPageGrid