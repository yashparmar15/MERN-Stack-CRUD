export default {
    getUsers : ()=>{
        return fetch('https://mern-crud-app-yash.herokuapp.com/user')
            .then(res => res.json()).then(data => data);
    },
    deleteUser : (_id)=>{
        return fetch(`https://mern-crud-app-yash.herokuapp.com/user/${_id}`,
        {method : 'delete'})
        .then(res => res.json())
        .then(data => data);
    },
    updateUser : (user)=>{
        return fetch(`https://mern-crud-app-yash.herokuapp.com/user/${user._id}`,
            {method : "put",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    },
    createUser : (user)=>{
        return fetch('https://mern-crud-app-yash.herokuapp.com/user',
            {method : "post",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    }
}