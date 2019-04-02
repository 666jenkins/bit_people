import React from 'react'

const UsersPageGrid = (props) => {

    function Card(obj) {

        let genderBg = "card";

        if (obj.props.gender === "female") {
            genderBg = "card #ffebee red lighten-5"
        }

        const item =
            <li>
                <div className="col s6 m4 l4">
                    <div className={genderBg}>
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