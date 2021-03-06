import React from 'react';

const UserTableRow = (props) => {
    const {firstName,lastName,college,phone,_id} = props.user;
    return(
        <tr>
            <th scope="row">{_id}</th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{college}</td>
            <td>{phone}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick = {props.s.bind(this,props.user)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick = {props.deleteHandler.bind(this,props.user._id)} className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default UserTableRow;