import React from 'react';

import UserTableRow from '.UserTableRow';

const UserTable = (props) => {
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
            <tbody>
                {props.users.map(user => {
                    return <UserTableRow key = {user._id}
                                         user = {user}
                                         deleteHandler = {props.deleteHandler}
                                         showEditForm = {props.showEditForm} />
                })}
            </tbody>
        </table>
    )
}


export default UserTable;