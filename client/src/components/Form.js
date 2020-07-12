import React from 'react';
import Input from './Input';

const Form = (props) => {
    return(
        <form onSubmit = {props.handler}>
            <h4>{props.isEditForm ? "Editing User : " : "Add User"}</h4>
            <div className="form-group">
                <Input name = "firstName"
                       placeholder = "Enter First Name"
                       labelName = "First Name: "
                       handleChange = {props.handleChange}
                       value = {props.user.firstName} />
                <Input name = "lastName"
                       placeholder = "Enter Last Name"
                       labelName = "Last Name: "
                       handleChange = {props.handleChange}
                       value = {props.user.lastName} />
                <Input name = "college"
                       placeholder = "Enter College"
                       labelName = "College: "
                       handleChange = {props.handleChange}
                       value = {props.user.college} />
                <Input name = "phone"
                       placeholder = "Enter Phone"
                       labelName = "Phone Number: "
                       handleChange = {props.handleChange}
                       value = {props.user.phone} />
            
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;