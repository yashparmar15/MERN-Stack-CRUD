import React from 'react';

import UserTableRow from './UserTableRow';

const UserTable = (props) => {  
    let b = null;
    if(props.users)
    b = 1;
    return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">User Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">College</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => {
                    return <UserTableRow key = {user._id}
                                        user = {user}
                                        deleteHandler = {props.deleteHandler}
                                        s = {props.s} />
                })}
            </tbody>
        </table>
    )
}


export default UserTable;