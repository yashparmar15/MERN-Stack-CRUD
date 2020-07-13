import React from 'react';

import UserTableRow from './UserTableRow';

const UserTable = (props) => {  
    let b = null;
    if(props.users)
    b = <tbody>
    {props.users.map(user => {
        return <UserTableRow key = {user._id}
                             user = {user}
                             deleteHandler = {props.deleteHandler}
                             s = {props.s} />
    })}
</tbody>
    return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Last</th>
                <th scope="col">College</th>
                <th scope="col">Phone Number</th>
                </tr>
            </thead>
            
            {b}
        </table>
    )
}


export default UserTable;